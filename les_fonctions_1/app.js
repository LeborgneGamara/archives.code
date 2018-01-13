function start() {

	choisirAQuiDireHello();
	
}

function choisirAQuiDireHello() {
	
	var jour = connaitreJourDeLaSemaine() ;
	
	if (jour === 'samedi') {
		var questionAdixBalles = direBonjour('fafa');
		// direBonjour('marco');
		// direBonjour('gabi');

		// alert(questionAdixBalles);
	} else {
		direBonjour('guigui');
	}
}

function direBonjour(nom) {

	console.log('hello  ' + nom + ' !');
}


function connaitreJourDeLaSemaine() {
	var l0 = new Leborgne({
		prenom: 'Max',
		age: 51,
		aDesLunettes: true
	});

	var days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
	var date = new Date();
	var numeroJour = date.getDay();
	var l1 = new Leborgne({
		prenom: 'Rafaël',
		age: 10,
		aDesLunettes: true
	});
	var l2 = new Leborgne({
		prenom: 'Marco',
		age: 11,
		aDesLunettes: false
	});
	var l3 = new Leborgne({
		prenom: 'Gabi',
		age: 11,
		aDesLunettes: false
	});

	l3.mangerSaucisson();

	console.log(l0);
	return days[numeroJour];
}

function Leborgne(carac) {
	this.prenom = carac.prenom;
	this.age = carac.age;
	this.aDesLunettes = carac.aDesLunettes;
}


Leborgne.prototype.mangerSaucisson = function mangerSaucisson() {
	console.log('Miam, c\'est bon le sauc');
}