#!/bin/sh
echo "Installation des dependances du package.json"
npm install
echo "Fin de l'installation des dependances du package.json"

echo "Lancement du server"
npm run serve
echo "Server Lancé"

echo "Ouverture de la page web lancé par le server"
open http://localhost:8080/
echo "Page ouvert"

