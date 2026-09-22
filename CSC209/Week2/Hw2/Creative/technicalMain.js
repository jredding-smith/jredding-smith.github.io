function sisterHood(){
	const sisMain = document.getElementById("sisterhoodDesc")
	if (sisMain.style.display === "none" || sisMain.style.display === ""){
		sisMain.style.display = "flex";
		sisMain.style.justifyContent = 'space-evenly'; 
	} else {
		sisMain.style.display = 'none';
	}
}

function feteDeLaVanille(){
	const feteMain = document.getElementById("feteDesc")
	if (feteMain.style.display === "none" || feteMain.style.display === ""){
		feteMain.style.display = "flex";
		feteMain.style.justifyContent = 'space-evenly'; 
	} else {
		feteMain.style.display = 'none';
	}
}

function unmusique(){
	const unmusic = document.getElementById("unmusicDesc")
	if (unmusic.style.display === "none" || unmusic.style.display === ""){
		unmusic.style.display = "flex";
		unmusic.style.justifyContent = 'space-evenly'; 
	} else {
		unmusic.style.display = 'none';
	}
}