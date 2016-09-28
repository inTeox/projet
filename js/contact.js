var Contact = {
    // Initialise le contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    // Affiche le contact
    affiche: function () {
        var affiche = this.prenom + "  " + this.nom ;
        return affiche;
    }
};  

var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");


var contacts = [];
contacts.push(contact1);
contacts.push(contact2);
 
 

console.log("Bonjour !");
console.log("afficher les contact : ==> 1");
console.log("quitter              : ==> 2");
var choix = Number(prompt("entrez-votre choix :"));

while (choix !== 2) {
   switch(choix) {
        case 1:
		      contacts.forEach(function (contact) {
              console.log(contact.affiche());  
              })
			  choix = Number(prompt("entrez-votre choix :"));
			  break;
		case 2:	
			  break;
		case 3:	  
              var n = prompt("entrez le nom :");
			  var p = prompt("entrez le prenom :");
			  var contactn = Object.create(Contact);
			  contactn.init(n, p);
			  contacts.push(contactn);
			  contacts.forEach(function (contact) {
              console.log(contact.affiche());  
              })
			  choix = Number(prompt("entrez-votre choix :"));
			  break;
    }
     
}; 



























