function homePage()
{
	window.open("index.html"," _self");
}

function projectPage()
{
	alert("Not created yet");
}

function aboutSite()
{
	alert("Copyright (c) 2016 Jordan Bottoms\n ");
}

function nav()
{
	document.getElementById("navBar").innerHTML = ('<button onclick="homePage()" style="margin-right: 100px; width:200px;">Home</button>' +
			' <button onclick="projectPage()" style="margin-right: 100px; width:200px;">Projects</button>' +
					'<button onclick="aboutSite()" style="margin-right: 100px; width:200px;">About Site</button>');
				
			//<button onclick="projectPage()" style="margin-right: 100px; width:200px;">Projects</button>
			//<button onclick="aboutSite()" style="margin-right: 100px; width:200px;">About Site</button>
}