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

function credit() {
  const x = document.getElementById("credentials");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function date(){
	const x = document.getElementBy
	let d = new Date()
	let year = d.getFullYear();
	let month = d.getMonth() + 1 ;
	let day = d.getDate();
	let result = month + "/" + day + "/" + year; 
	
	document.getElementById("currentDate").innerHTML = "Todays date is the following:  " + result 
	
}

function hideShow(){
	const tab = document.getElementById("wholeTable");
	if (tab.style.display === "table"){
		tab.style.display = "none";
		document.querySelector('#tableDis').textContent = "Want to show the table, click me";
	} else{
		tab.style.display = "table";
		document.querySelector('#tableDis').textContent = "Want to hide the table, click me";
	}
}

function hideShowRowOne(){
	const one = document.getElementById("rowOneWhole");
	if (one.style.display === ""){
		one.style.display = "none";
		document.querySelector('#rowOne').textContent = "Show";
	} else{
		one.style.display = "";
		document.querySelector('#rowOne').textContent = "Hide";
	}
}

function hideShowRowTwo(){
	const two = document.getElementById("rowTwoWhole");
	if (two.style.display === ""){
		two.style.display = "none";
		document.querySelector('#rowTwo').textContent = "Show";
	} else{
		two.style.display = "";
		document.querySelector('#rowTwo').textContent = "Hide";
	}
}

function hideShowRowThree(){
	const three = document.getElementById("rowThreeWhole");
	if (three.style.display === ""){
		three.style.display = "none";
		document.querySelector('#rowThree').textContent = "Show";
	} else{
		three.style.display = "";
		document.querySelector('#rowThree').textContent = "Hide";
	}
}

function hideShowRowFour(){
	const four = document.getElementById("rowFourWhole");
	if (four.style.display === ""){
		four.style.display = "none";
		document.querySelector('#rowFour').textContent = "Show";
	} else{
		four.style.display = "";
		document.querySelector('#rowFour').textContent = "Hide";
	}
}