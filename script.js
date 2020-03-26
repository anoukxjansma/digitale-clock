function clock(){
	var today = new Date();
	var uur = today.getHours();
	var minuut = today.getMinutes();
	var seconde = today.getSeconds();

	// add trailing zero to hours
	if(uur==24){
		uur = "00";
	}
	else if(uur < 10) {
		uur = "0"+ uur;
	}

	// voeg een 0 toe aan minuut
	if(minuut < 10) {
		minuut = "0"+ minuut;
	}

	// voeg een 0 toe aan seconde
	if(seconde < 10) {
		seconde = "0"+ seconde;
	}

	document.getElementById('uur').innerHTML = uur; 
	document.getElementById('minuut').innerHTML = minuut;
	document.getElementById('seconde').innerHTML = seconde;


	//achtergrond kleur
	if(uur >= 6 && uur < 12){ //ochtend
		document.body.style.backgroundColor = "orange";
	}

	else if(uur >= 12 && uur < 18){ //middag
		document.body.style.backgroundColor = "blue";
	}

	else if(uur >= 18 && uur < 24){ //avond
		document.body.style.backgroundColor = "purple";
	}

	else{ //nacht
		document.body.style.backgroundColor = "gray";
	}

};


function date(){
	var today = new Date();
	var dag = today.getDate();
	var maand = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
	var jaar = today.getFullYear();

	// add trailing zero to dag
	if(dag < 10) {
		dag = "0"+ dag;
	}
	document.getElementById('dag').innerHTML = dag; 
	
	// add trailing zero to maand
	if(maand < 10) {
		maand = "0"+ maand;
	}
	document.getElementById('maand').innerHTML = maand[today.getMonth()];
};



window.onload = function(){
clock();
date();
setInterval(clock, 1000);
//animateBackground();
};
