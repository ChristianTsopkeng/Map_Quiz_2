var aleatoire;
fetch("Liste_Pays.json") // chemin du fichier
    .then(response => response.json()) // convertir la réponse en JSON
    .then(data => {
        function chouse_countrie(nbr_pays,score,mauvais_pays,nbr_essais,points_perdue){
        const tab_pays = data;
        const ContinentContainer = document.getElementById('pays');
        
        //Accéder à un élément en particulier dans le map
        aleatoire = Actualiser_Variable_Aleatoire(nbr_pays);
        var premierPays = tab_pays['Asie'][aleatoire]; //const premierPays = tab_pays["Afrique"][aleatoire]; 
        var nomPremierPays = premierPays.nom;
        var capitalePremierPays = premierPays.capitale;
        var random_id = premierPays.ref;//Variable pour acceder a l'id dans le fichier
        var mauvais_pays = false; //Verifier si l'utilisateur c'est tromper de pays
         //score Connaitre le cscore de l'utilisateur
         // points_perdue = 0;
        document.getElementById("pays_rechercher").innerHTML = 'Ou est ce pays:' + nomPremierPays;
        document.getElementById("points_perdue").innerHTML = 'Perdue'+points_perdue;
        document.getElementById("points_gagne").innerHTML = 'Ganier'+score;
        document.getElementById("pays_restants").innerHTML = `Reste(s) ${nbr_pays+1}`;

        console.log(nomPremierPays);
        console.log(capitalePremierPays);
        console.log("Random id:"+random_id);

        var paths = document.querySelectorAll('.continent a');
        paths.forEach(function(path) {
            path.addEventListener('click', function(event) {
                var id_map = this.id;
                console.log(id_map);
                mauvais_pays = false;

                if(id_map === random_id){//Comparer l'id du map et l'id cliké sur le map et l'id du mot rechercher aleatoirement
                    console.log("Bravo!!!");    

                    //En cas de réeuçite changer la couleur en vert
                    // change_colore = document.getElementById('id_map');
                    // change_colore.classList.add("fill_green");
                    // change_colore.className = 'fill_green';    
                            
                    score ++;
                    premierPays = tab_pays['Asie'][aleatoire]; // premierPays = tab_pays["Afrique"][aleatoire]; cette variable reçois la l'élément du tableau sur lequel nous allons travailler! 
                    nomPremierPays = premierPays.nom;//reçois le nom du pays sur lequel nous travaillons
                    capitalePremierPays = premierPays.capitale;//reçois le nom de la capitale sur laquelle nous travaillons
                    random_id = premierPays.ref;//reçois la reference (id) du pays sur lequel nous travaillons
                
                    //premierPays = tab_pays['Asie'][aleatoire];
                    var index_existe = tab_pays['Asie'].findIndex(country => country.ref === random_id);
                    if(index_existe !== -1){//Verifi si l'index de l'élément trouver à travers le bon click existe dans le tableau
                        console.log('Pays supprimé :',random_id);
                        tab_pays['Asie'].splice(index_existe,1);//Si l'élément rechercher existe il sera supprimer à travers la fonction splite;
                        
                        aleatoire = Actualiser_Variable_Aleatoire(nbr_pays);//Apres avoir trouver le pays actualiser le score
                        nbr_pays--;//reduire le nombre de pays pour la variable aléatoire
                        console.log(`Nombre de pays actuelle :${nbr_pays+1}`);
                        
                        premierPays = tab_pays['Asie'][aleatoire]; // premierPays = tab_pays["Afrique"][aleatoire]; cette variable reçois la l'élément du tableau sur lequel nous allons travailler! 
                        nomPremierPays = premierPays.nom;//reçois le nom du pays sur lequel nous travaillons
                        capitalePremierPays = premierPays.capitale;//reçois le nom de la capitale sur laquelle nous travaillons
                        random_id = premierPays.ref;//reçois la reference (id) du pays sur lequel nous travaillons
                    

                        console.log('Nouveau pays rechercher: ',nomPremierPays);
                        console.log('Nouvelle capitale rechercher: ',capitalePremierPays);
                        console.log("Random id:"+random_id);
                        nbr_essais = 0;
                        tab_pays['Asie'].forEach(county =>{
                            console.log('Pays: ',county.nom);
                            console.log('Capitale: ',county.capitale);
                            document.getElementById("pays_rechercher").innerHTML = 'Ou est ce pays:' + nomPremierPays;
                            document.getElementById("points_perdue").innerHTML = 'Perdue'+points_perdue;
                            document.getElementById("points_gagne").innerHTML = 'Ganier'+score;
                            document.getElementById("pays_restants").innerHTML = `Reste(s) ${nbr_pays+1}`;
                        });
                    }
                    else{
                        console.log("Pays déjà suprimer")
                    }
                }
                else{
                    console.log("Mauvais pays.");
                     mauvais_pays = true;
                     
                     nbr_essais ++;
                     console.log(nbr_essais)
                     if(nbr_essais>= 3){
                        console.log('Perdue.');

                        //En cas de réeuçite changer la couleur en vert
                        // change_colore = document.getElementById('id_map');;
                        // change_colore.classList.add("fil_red");
                        // change_colore.className = 'fill_red'; 
                        var index_existe = tab_pays['Asie'].findIndex(country => country.ref === random_id);
                        if(index_existe !== -1){
                            console.log('Pays supprimé :',random_id);
                            tab_pays['Asie'].splice(index_existe,1);//Supprimer element du tableau;
                            points_perdue++;
                            
                            aleatoire = Actualiser_Variable_Aleatoire(nbr_pays);//Apres avoir trouver le pays actualiser le score
                            premierPays = tab_pays['Asie'][aleatoire]; //const premierPays = tab_pays["Afrique"][aleatoire]; 
                            nomPremierPays = premierPays.nom;
                            capitalePremierPays = premierPays.capitale;
                            random_id = premierPays.ref;
                            console.log('Nouveau pays rechercher: ',nomPremierPays);
                            console.log('Nouvelle capitale rechercher: ',capitalePremierPays);
                            console.log("Random id:"+random_id);
                            nbr_essais = 0;
                            console.log('Nombre d essais',nbr_essais)
                            tab_pays['Asie'].forEach(county =>{
                                console.log('Pays: ',county.nom);
                                console.log('Capitale: ',county.capitale);
                            });
                            nbr_pays--;console.log(`Nombre de pays actuelle :${nbr_pays+1}`);
                            document.getElementById("pays_rechercher").innerHTML = 'Ou est ce pays:' + nomPremierPays;
                            document.getElementById("points_perdue").innerHTML = 'Perdue'+points_perdue;
                            document.getElementById("points_gagne").innerHTML = 'Ganier'+score;
                            document.getElementById("pays_restants").innerHTML = `Reste(s) ${nbr_pays+1}`;
                        }
                        
                    }
                }

                console.log('Votre score est: ',score);
                const clickedElement = event.target;
            });
        });

    return mauvais_pays;}

    var nbr_pays = 48, score=0; var mauvais_pays = false; var nbr_essais = 0; var points_perdue = 0;
    mauvais_pays = chouse_countrie(nbr_pays,score,mauvais_pays,nbr_essais,points_perdue);
    if(mauvais_pays){
        for( i = 0;i<2;i++){
            chouse_countrie(nbr_pays,score,mauvais_pays);
            nbr_pays--;
        }
    }    

    })
    .catch(error => console.error("Erreur de chargement", error));


    function Actualiser_Variable_Aleatoire(nbr_pays){
         const aleatoire = Math.floor(Math.random() * nbr_pays);
         
         return aleatoire;}