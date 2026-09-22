function lighterTheme(){
	document.getElementById("myStylesheet").href = "techMainStyles.css";
	document.getElementById("banner").src = "imageBanner.jpg";
	
}

function darkerTheme(){
	document.getElementById("myStylesheet").href = "techMainDarkStyles.css";
	document.getElementById("banner").src = "secondImageBanner.jpg";
}

function about(){
	const x = document.getElementById("moreInfo");
	if (x.style.display === "none"){
		x.style.display = 'block';
	} else {
		x.style.display = "none";
	}
}