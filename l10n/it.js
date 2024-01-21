OC.L10N.register(
    "backup",
    {
    "Backup" : "Backup",
    "Update on all Backup's event" : "Aggiornamento su tutti gli eventi di Backup",
    "complete" : "completo",
    "partial" : "parziale",
    "seconds" : "secondi",
    "minutes" : "minuti",
    "hours" : "ore",
    "days" : "giorni",
    "A new restoring point ({type}) has been generated, requiring maintenance mode for {downtime}." : "È stato generato un nuovo punto di ripristino ({type}), che richiede la modalità di manutenzione per {downtime}.",
    "Your system have been fully restored based on a restoring point from {date} (estimated rewind: {rewind})" : "Il tuo sistema è stato completamente ripristinato in base ad un punto di ripristino del {date} (tempo riavvolto: {rewind})",
    "The file {file} have been restored based on a restoring point from {date} (estimated rewind: {rewind})" : "Il file {file} è stato ripristinato in base a un punto di ripristino del {date} (tempo riavvolto: {rewind})",
    "Backup now. Restore later." : "Fai il backup adesso. Ripristina più tardi.",
    "The Backup App creates and stores backup images of your Nextcloud:\n\n- Backup the instance, its apps, your data and your database,\n- Administrator can configure the time slots for automated backup,\n- Full and Partial backup, with different frequencies,\n- 2-pass to limit downtime (maintenance mode) of your instance,\n- Compression and encryption,\n- Upload your encrypted backup on an external filesystem,\n- Download and search for your data,\n- Restore single file or the entire instance." : "L'applicazione Backup crea e archivia le immagini di backup della tua Nextcloud:\n\n- Esegue il backup dell'istanza, delle sue applicazioni, dei tuoi dati e del tuo database,\n- L'amministratore può configurare le fasce orarie per il backup automatico,\n- Backup completo e parziale, con frequenze diverse,\n- 2 passaggi per limitare i tempi d'inattività (modalità di manutenzione) della tua istanza,\n- Compressione e cifratura,\n- Carica il tuo backup cifrato su un sistema di file esterno,\n- Scarica e cerca i tuoi dati,\n- Ripristina un singolo file o l'intera istanza.",
    "App Data" : "Dati dell'applicazione",
    "Choose where the backup app will initially store the restoring points." : "Scegli dove l'applicazione di backup memorizzerà inizialmente i punti di ripristino.",
    "Path in which to store the data. (ex: app_data)" : "Percorso in cui memorizzare i dati. (es: app_data)",
    "Set as App Data" : "Imposta come dati dell'applicazione",
    "Error" : "Errore",
    "Changing the App Data will delete the data stored in the previous one including restoring points." : "La modifica dei dati dell'applicazione eliminerà i dati memorizzati nella precedente, inclusi i punti di ripristino.",
    "I understand some data will be deleted." : "Comprendo che alcuni dati saranno eliminati.",
    "Change the App Data" : "Cambia i dati dell'applicazione",
    "Local storage" : "Archivio locale",
    "Unable to fetch app data" : "Impossibile recuperare i dati dell'applicazione",
    "App data has been set" : "I dati dell'applicazione sono stati impostati",
    "Unable to set app data" : "Impossibile impostare i dati dell'applicazione",
    "Restoring points locations" : "Posizioni dei punti di ripristino ",
    "Manage available storage locations for storing restoring points" : "Gestisci le posizioni di archiviazione disponibili per l'archiviazione dei punti di ripristino",
    "Path in which to store the restoring points. (ex: backups)" : "Percorso in cui memorizzare i punti di ripristino. (es: backups)",
    "Add new external location" : "Aggiungi nuova posizione esterna",
    "External storage" : "Archiviazione esterna",
    "Restoring point location" : "Posizione del punto di ripristino ",
    "Actions" : "Azioni",
    "Delete" : "Elimina",
    "No external storage available" : "Nessuna archiviazione esterna disponibile",
    "If you want to store your restoring points on an external location, configure an external storage in the \"External storage\" app." : "Se desideri archiviare i tuoi punti di ripristino in una posizione esterna, configura una memoria esterna nell'applicazione \"Archiviazione esterna\".",
    "No external locations set" : "Nessuna posizione esterna impostata",
    "You can add a new location with the above form." : "Puoi aggiungere una nuova posizione con il modulo sopra.",
    "Unable to fetch external locations" : "Impossibile recuperare le posizioni esterne",
    "New external location added" : "Nuova posizione esterna aggiunta",
    "Unable to save new external location" : "Impossibile salvare la posizione esterna",
    "External location deleted" : "Posizione esterna eliminata",
    "Unable to delete the external location" : "Impossibile eliminare la posizione esterna",
    "Backups configuration" : "Configurazione di Backup",
    "General configuration on how and when your restoring points are created." : "Configurazione generale su come e quando vengono creati i punti di ripristino.",
    "Enable background tasks" : "Abilita attività in background",
    "You can enable background task for backups. This means that the creation, maintenance and purges of backups will be done automatically." : "È possibile abilitare l'attività in background per i backup. Ciò significa che la creazione, la manutenzione e l'eliminazione dei backup verranno eseguite automaticamente.",
    "Creation: New restoring points will be created according to the schedule." : "Creazione: Verranno creati nuovi punti di ripristino in base alla pianificazione.",
    "Maintenance: Restoring points will be packed and copied to potential external storages." : "Manutenzione: i punti di ripristino verranno compressi e copiati in potenziali posizioni esterne.",
    "Purge: Old restoring points will be deleted automatically according to the retention policy." : "Elimina: I vecchi punti di ripristino saranno eliminati automaticamente in base ai criteri di conservazione.",
    "Enable background tasks to automatically manage creation, maintenance and purge." : "Abilita le attività in background per gestire automaticamente la creazione, la manutenzione e l'eliminazione.",
    "Backup schedule" : "Pianificazione del backup",
    "Limit restoring points creation to the following hours interval:" : "Limita la creazione di punti di ripristino al seguente intervallo di ore:",
    "and" : "e",
    "Allow the creation of full restoring points during week day" : "Consente la creazione di punti di ripristino completi durante i giorno della settimana",
    "Time interval between two full restoring points" : "Intervallo di tempo tra due punti di ripristino completi",
    "Time interval between two partial restoring points" : "Intervallo di tempo tra due punti di ripristino parziali",
    "Packing processing" : "Elaborazione compressione",
    "Processing that will be done on the restoring points during the packing step." : "Lavorazione che verrà effettuata sui punti di ripristino durante la fase di compressione.",
    "Encrypt restoring points" : "Cifra i punti di ripristino",
    "Compress restoring points" : "Comprime i punti di ripristino",
    "Retention policy" : "Criteri di conservazione",
    "You can specify the number of restoring points to keep during a purge." : "È possibile specificare il numero di punti di ripristino da conservare durante l'eliminazione.",
    "Policy for the local app data" : "Criterio per i dati dell'applicazione locale",
    "Policy for external storages" : "Criteri per gli archivi esterni",
    "Export backup configuration" : "Esporta la configurazione del backup",
    "You can export your settings with the below button. The exported file is important as it allows you to restore your backup in case of full data lost. Keep it in a safe place!" : "Puoi esportare le tue impostazioni con il pulsante in basso. Il file esportato è importante in quanto consente di ripristinare il backup in caso di perdita completa dei dati. Conservalo in un luogo sicuro!",
    "Export configuration" : "Esporta la configurazione",
    "Your settings export as been downloaded encrypted. To be able to decrypt it later, please keep the following private key in a safe place:" : "Le tue impostazioni esportate vengono scaricate crittografate. Per poterlo decifrare in un secondo momento, conserva la seguente chiave privata in un luogo sicuro:",
    "Request the creation of a new restoring point now" : "Richiedi ora la creazione di un nuovo punto di ripristino",
    "The creation of a restoring point as been requested and will be initiated soon." : "La creazione di un punto di ripristino, come richiesto, sarà avviata a breve.",
    "Create full restoring point" : "Crea un punto di ripristino completo",
    "Requesting a backup will put the server in maintenance mode." : "La richiesta di un backup metterà il server in modalità di manutenzione.",
    "I understand that the server will be put in maintenance mode." : "Comprendo che il server verrà messo in modalità di manutenzione.",
    "Cancel" : "Annulla",
    "Request {mode} restoring point" : "Richiedi {mode} punto di ripristino",
    "Unable to fetch the settings" : "Impossibile recuperare le impostazioni",
    "Settings saved" : "Impostazioni salvate",
    "Unable to save the settings" : "Impossibile salvare le impostazioni",
    "Unable to request restoring point" : "Impossibile richiedere il punto di ripristino",
    "Unable to export settings" : "Impossibile esportare le impostazioni",
    "_day_::_days_" : ["giorno","giorni","giorni"],
    "Scheduled" : "Programmato",
    "Pending" : "In attesa",
    "Not completed" : "Non completato",
    "Orphan" : "Orfano",
    "Completed" : "Completato",
    "Not packed yet" : "Non ancora compresso",
    "Packed" : "Compresso",
    "Encrypted" : "Cifrato",
    "Compressed" : "Compresso",
    "Restoring points history" : "Cronologia dei punti di ripristino",
    "List of the past and future restoring points" : "Elenco dei punti di ripristino passati e futuri",
    "Issue" : "Problema",
    "Health" : "Salute",
    "Status" : "Stato",
    "Date" : "Data",
    "ID" : "ID",
    "No issue" : "Nessun problema",
    "Local" : "Locale",
    "Next full restoring point" : "Prossimo punto di ripristino completo",
    "Next partial restoring point" : "Prossimo punto di ripristino parziale",
    "Unable to fetch restoring points" : "Impossibile recuperare i punti di ripristino",
    "Scan Backup Folder" : "Scansiona la cartella di backup"
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
