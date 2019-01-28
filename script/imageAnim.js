(() => {
	// set up the puzzle pieces and boards
	//document.querySelector("h1").textContent = "JavaScript Puzzle"
	//document.querySelector("p").textContent = "Play"
	let theButton = document.querySelector("#buttonHolder img");
	//window.addEventListener("load", changeHeaderText);

	function changeHeaderText(){
	document.querySelector("h1").textContent = "Puzzle with JavaScript"
	document.querySelector("p").textContent = "Play "
}

	theButton.addEventListener("click", changeHeaderText);

	
})();
