<?php

declare(strict_types=1);


/**
 * Nextcloud - Backup
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Maxence Lange <maxence@artificial-owl.com>
 * @copyright 2021, Maxence Lange <maxence@artificial-owl.com>
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


namespace OCA\Backup\RemoteRequest;


use ArtificialOwl\MySmallPhpTools\Exceptions\InvalidItemException;
use ArtificialOwl\MySmallPhpTools\IDeserializable;
use ArtificialOwl\MySmallPhpTools\Traits\Nextcloud\nc23\TNC23Deserialize;
use ArtificialOwl\MySmallPhpTools\Traits\Nextcloud\nc23\TNC23Logger;
use OCA\Backup\AppInfo\Application;
use OCA\Backup\Exceptions\RestoringPointNotFoundException;
use OCA\Backup\IRemoteRequest;
use OCA\Backup\Model\RestoringChunk;
use OCA\Backup\Service\ArchiveService;
use OCA\Backup\Service\PointService;
use OCP\Files\NotFoundException;
use OCP\Files\NotPermittedException;


/**
 * Class UploadRestoringChunk
 *
 * @package OCA\Backup\RemoteRequest
 */
class UploadRestoringChunk extends CoreRequest implements IRemoteRequest {


	use TNC23Deserialize;
	use TNC23Logger;


	/** @var PointService */
	private $pointService;

	/** @var ArchiveService */
	private $chunkService;


	/**
	 * UploadRestoringChunk constructor.
	 *
	 * @param PointService $pointService
	 * @param ArchiveService $chunkService
	 */
	public function __construct(
		PointService $pointService,
		ArchiveService $chunkService
	) {
		parent::__construct();

		$this->pointService = $pointService;
		$this->chunkService = $chunkService;

		$this->setup('app', Application::APP_ID);
	}


	/**
	 */
	public function execute(): void {
		try {
			$signedRequest = $this->getSignedRequest();
			$signatory = $signedRequest->getSignatory();
			$pointId = $signedRequest->getIncomingRequest()->getParam('pointId');

			$point = $this->pointService->getRestoringPoint($pointId, $signatory->getInstance());
			/** @var RestoringChunk $chunk */
			$chunk = $this->deserializeJson($signedRequest->getBody(), RestoringChunk::class);

			$this->pointService->initBaseFolder($point);
			$this->chunkService->saveChunkContent($point, $chunk);

			$health = $this->pointService->generateHealth($point, true);

			$this->setOutcome($this->serialize($health));
		} catch (RestoringPointNotFoundException
		| InvalidItemException
		| NotFoundException
		| NotPermittedException $e) {
		}
	}


	/**
	 * @param array $data
	 *
	 * @return IDeserializable
	 */
	public function import(array $data): IDeserializable {
		return $this;
	}

}