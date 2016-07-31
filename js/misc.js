function nav()
{
	document.getElementById("navBar").innerHTML = ('<button onclick="homePage()" style="margin-right: 100px; width:200px;">Home</button>' +
			' <button onclick="projectPage()" style="margin-right: 100px; width:200px;">Projects</button>' +
					'<button onclick="systemInfoPage()" style="margin-right: 100px; width:200px;">System Info</button>' + 
					'<button onclick="aboutPage()" style="margin-right: 100px; width:200px;">About Site</button>');
}

// code isn't used atm, but may prove useful
function pageCheck()
{
	var page;
	page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
	alert(page);
}

function footer()
{
	
	document.getElementById("footer").innerHTML = ('<p style="text-align: left">Copyright (c) 2016 Jordan Bottoms' + 
			'</br>Released under the Apache 2 License</p>');
}

function systemInfo()
{
	var agent = navigator.userAgent;
	document.getElementById("systemInfo").innerHTML =('<p> Your Browser/OS: ' + agent + ' (this info is not stored or collected)</p>' );
}