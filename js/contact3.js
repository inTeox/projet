/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

// Definition prototype Contact
var Contact = {

    init: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },

    decrire: function() {
        description = "Nom : " + this.nom + ", prénom : " + this.prenom;

        return description;
    }
}

// fonction gérant le menu
function menu() {
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");

    var choix = Number(prompt("Choisir une Option"));

    return choix;
}


// initialisation des données de bases
var carole = Object.create(Contact);
carole.init("Lévisse", "Carole");

var melodie = Object.create(Contact);
melodie.init("Nelsonne", "Mélodie");

var contacts = [carole, melodie];


// initalisation du programme
console.log("Bienvenue dans le Gestionnaire de Contacts")
var option;

// boucle principale
while(option !== 0) {

    switch (option) {

        // lister les contacts
        case 1 :
            console.log("Voici la liste des contacts : ")
            contacts.forEach(function(contact) {
                console.log(contact.decrire());
            });
            console.log('');
            break;

        // ajouter un contact
        case 2 :
            var nom = prompt("Saisir le nom : ");
            var prenom = prompt("Saisir le prenom : ");
            var nouveauContact = Object.create(Contact);
            nouveauContact.init(nom, prenom);
            contacts.push(nouveauContact);
            console.log("Le nouveau contact à été ajouté.");
            console.log('');
            break;
    }

    option = menu();
}
