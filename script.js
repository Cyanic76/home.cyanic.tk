function init() {
  search();
  rbg();
  setInterval(clock, 250);
}

function rbg() {
  const urls = [
    "https://source.unsplash.com/collection/383693",
    "https://source.unsplash.com/collection/219941",
    "https://source.unsplash.com/collection/894",
    "https://source.unsplash.com/collection/2203755"
  ]
  var randomURL = urls[Math.floor(Math.random()*urls.length)];
  document.body.style.background = `url("${randomURL}")`;
  document.body.style.backgroundSize = "cover";
}

function clock() {
  let d = new Date();
  let c = document.getElementById("clock");
  let da = document.getElementById("date");
  let h = d.getHours();
  let m = d.getMinutes();
  if(m < 10) m = `0${m}`;
  c.innerHTML = `${h}:${m}`
  let date = d.getDate();
  let month = d.getMonth();
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  let wd = weekday[d.getDay()];
  let mo = months[month];
  da.innerHTML = `${wd}, ${date} ${mo}`
}

function search() {
  let input = document.getElementById("search");
	input.addEventListener('keyup', function(e){
		if(e.keyCode === 13){
			Search("ddg");
		}
	})
}

function Search(service) {
  let q = document.getElementById("search");
  let url = "";
  if(q.value === ""){
		document.getElementById("searchErr").style.display = "inline";
		document.getElementById("search").style.borderBottom = "2px red solid";
		return;
  };
	document.getElementById("searchErr").style.display = "none";
	document.getElementById("search").style.borderBottom = "1px white solid";
  if(service === "ddg") url = "https://duckduckgo.com/?q=";
  if(service === "spotify") url = "https://open.spotify.com/search/";
  if(service === "git") url = "https://github.com/search?utf8=✓&q=";
  if(service === "twitter") url = "https://twitter.com/search?q=";
  if(service === "yt") url = "https://www.youtube.com/results?q=";
  if(service === "wiki") url = "https://en.wikipedia.org/wiki/Special:Search?search=";
  window.location.href = url+q.value;
  return;
}
