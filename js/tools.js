// Non critical website functions
function systemInfo()
{
	var agent = navigator.userAgent;
	document.getElementById("systemInfo").innerHTML =('<p> Your Browser/OS: ' + agent + ' (this info is not stored or collected)</p>' );
}
// code isn't used atm, but may prove useful
function pageCheck()
{
	var page;
	page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
	alert(page);
}

