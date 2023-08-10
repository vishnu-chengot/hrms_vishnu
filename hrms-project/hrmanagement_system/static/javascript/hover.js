limit = document.querySelectorAll("li")
for (let i = 0; i <limit.length; i++) {
	limit[i].addEventListener('mouseover', coloringHandler);
	limit[i].addEventListener('mouseout', decoloringHandler);
}

function coloringHandler(){
this.classList.add("active")
}

function decoloringHandler(){
this.classList.remove("active")
}