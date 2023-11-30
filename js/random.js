function changeBG() {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	document.body.style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ')';
}

setInterval(changeBG, 1500);
