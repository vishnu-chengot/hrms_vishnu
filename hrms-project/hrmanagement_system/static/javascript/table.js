
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "Daily work Hourse"
	},
	axisY: {
		title: "Reserves(MMbbl)"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "grey",
		legendText: "MMbbl = one million barrels",
		dataPoints: [      
			{ y: 300878, label: "SUN" },
			{ y: 266455,  label: "MON" },
			{ y: 169709,  label: "TUE" },
			{ y: 158400,  label: "WED" },
			{ y: 300878,  label: "THU" },
			{ y: 101500, label: "FRI" },
			{ y: 97800,  label: "SAT" },
			{ y: 300878,  label: "SUN" }
      
		]
	}]
});
chart.render();


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
}










				






