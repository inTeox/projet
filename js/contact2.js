/* 
Activité : gestion des contacts
*/

//structures de données
//définition d'un contact
function Contact(prenom, nom)
{
    this.nom = nom;
    this.prenom = prenom;
}
//tableau de stockage des contacts
var tabContact = [];

//initialisations
tabContact.push(new Contact("Carole", "Lévisse"));
tabContact.push(new Contact("Mélodie", "Nelson"));

//fonction de saisie d'un nouveau contact
function saisieNouveauContact()
{
    //saisie des informations du contact
    var prenom = prompt("Entrez le prénom du contact à rajouter :");
    var nom = prompt("Entrez le nom du contact à rajouter :");
    
    //on vérifie que ce contact n'est pas déjà dans la liste
    var contactExistant = false;
    tabContact.forEach(function(tmpContact)
    {
        if (tmpContact.prenom == prenom && tmpContact.nom == nom) //TODO test lowercase ?
        {
            contactExistant = true;
            //break; //TODO interrompre la boucle ici
        }
    });
    
    //exécution de l'ajout et affichage du résultat
    console.log("\nAjout d'un contact:");
    if (contactExistant == true)
    {
        console.log("  " + prenom + " " + nom + " : Contact déjà présent dans la liste !")
    }
    else
    {
        tabContact.push(new Contact(prenom, nom));
        console.log("  " + prenom + " " + nom + " : Contact ajouté");
    }
}

//fonction d'affichage de la liste des contacts
function afficherListeContacts()
{
    console.log("\nListe des contacts:");
    tabContact.forEach(function(tmpContact)
    {
        console.log("  " + tmpContact.prenom + " " + tmpContact.nom);
    });
}

//boucle principale
var choix = NaN; //choix de l'option dans le menu principal
while (choix != "0") //le choix "0" correspond à "quitter"
{
    choix = prompt("Menu principal\n  0 - Quitter\n  1 - Ajouter un contact\n  2 - Afficher la liste des contacts");
    switch (choix)
    {
        case "0":
            console.log("\nAu revoir !");
            break; 
        case "1":
            saisieNouveauContact(); //saisie d'un nouveau contact;
            break;
        case "2":
            afficherListeContacts(); //affichage des contacts
            break;
        default:
            alert("Saisie invalide !"); //saisie invalide
    }
}
