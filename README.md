# **Git Befehle/ Basics**

git init
>ein bestehendes URL herunterladen oder ein neues Repository anlegen

git add .
>nimmt ein Index auf, um sie mit commit im Verlauf einzufügen

git commit -m "finished 
feature, yeah"
>fügt den Index permanent in die Historie auf

git commit -am "finished feature, yeah"
>siehe git add . und git commit -m (beides zusammen)

git pull
>läd den neusten Stand vom online Repository runter und aktualisiert den Stand des lokalen Repositorys

git push
>pusht die aktuellen Veränderungen hoch (Github)

git branch
>listet alle lokalen Branches im aktuellen Repository auf

git merge (Branchname)
>aktualisierte Branchbearbeitung mit anderem Branch zusammenfügen

git checkout (Branchname)
>wechselt zu angegebenem Branch

git checkout -b "main"
>erstellt und wechselt zu erstelltem Branch

git status
>listet alle zum commit bereiten neuen Dateien auf oder geänderten Dateien auf

git log
>listet die Versionshistorie für den aktuellen Branch auf

git branch -d (Branchname)
>löscht den angegebenen Branch (sofern man Änderungen vorher gemerged hat mit Branch)

git branch -D
>forciertes Löschen von Branches, egal ob gemerged wurde oder nicht

git clone (Link)
>klont ein Online Repository und lädt seine gesamte Versionshistorie herunter


