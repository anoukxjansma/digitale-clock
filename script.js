function clock(){
	var today = new Date();
	var uur = today.getHours();
	var minuut = today.getMinutes();
	var seconde = today.getSeconds();

	// zet 24 om in 00 en voeg een 0 toe aan uren lager dan 10
	if(uur==24){
		uur = "00";
	}
	else if(uur < 10) {
		uur = "0"+ uur;
	}

	// voeg een 0 toe aan minuten lager dan 10
	if(minuut < 10) {
		minuut = "0"+ minuut;
	}

	// voeg een 0 toe aan seconden lager dan 10
	if(seconde < 10) {
		seconde = "0"+ seconde;
	}

	document.getElementById('uur').innerHTML = uur; 
	document.getElementById('minuut').innerHTML = minuut;
	document.getElementById('seconde').innerHTML = seconde;


	//achtergrond kleur
	if(uur >= 6 && uur < 13){ //ochtend
		document.body.style.backgroundColor = "orange";
	}

	else if(uur >= 13 && uur < 18){ //middag
		document.body.style.backgroundColor = "#0d83d3";
	}

	else if(uur >= 18 && uur < 24){ //avond
		document.body.style.backgroundColor = "#2f0d56";
	}

	else{ //nacht
		document.body.style.backgroundImage = "url('achtergrond-nacht.svg')";
		document.body.style.backgroundColor = "#060626";


	}

};


function date(){
	var today = new Date();
	var dag = today.getDate();
	var maand = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
	var jaar = today.getFullYear();

	// voeg een 0 toe aan dagen lager dan 10
	if(dag < 10) {
		dag = "0"+ dag;
	}
	document.getElementById('dag').innerHTML = dag; 
	document.getElementById('maand').innerHTML = maand[today.getMonth()];
};



window.onload = function(){
	clock();
	date();
	setInterval(clock, 1000);
};
