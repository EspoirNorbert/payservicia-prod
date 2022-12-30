#!/bin/bash
#script3.sh verification de lexistance d'un chemin
#origine

read -p " Entrez le chemin de destnation " chemin

control(){

	if [ -e $chemin ]; then
		echo "le  chemin $chemin existe"
		cp -r . $chemin
	else
		echo "le chemin $chemin n'existe  pas"
		exit
	fi

}

control
exit
