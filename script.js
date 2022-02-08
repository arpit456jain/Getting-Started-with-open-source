//NavBar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// scroll to top starts
var scrolltop = $("#scroll-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 80) {
    scrolltop.addClass("active");
  } else {
    scrolltop.removeClass("active");
  }
});

scrolltop.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "200");
});
// scroll to top ends

// for first time contributors
fetch("style_links.json")
  .then((response) => response.json())
  .then((data) => {
    let links = data;

    for (let i = 0; i < links.length; i++) {
      console.log(links.length);
      let StyleBoxDiv = document.createElement("div");
      StyleBoxDiv.innerHTML = `<div class="stylebox">
            <div class="image">
                 <img src="https://avatars.githubusercontent.com/${links[i].Github_username}" alt="">
             </div>
            <p>${links[i].name}</p>
            
            <div class="btn-group">
            <a target="_blank" href="https://github.com/${links[i].Github_username}">View Profile</a>

            </div>

            </div>`;
      document.getElementById("styles").appendChild(StyleBoxDiv);
    }
  });


  // for 2nd year ces team
  fetch("ces_team.json")
  .then((response) => response.json())
  .then((data) => {
    let links = data;

    for (let i = 0; i < links.length; i++) {
      console.log(links.length);
      let StyleBoxDiv = document.createElement("div");
      StyleBoxDiv.innerHTML = `<div class="stylebox">
            <div class="image">
                 <img src="https://avatars.githubusercontent.com/${links[i].Github_username}" alt="">
             </div>
            <p>${links[i].name}</p>
            
            <div class="btn-group">
            <a target="_blank" href="https://github.com/${links[i].Github_username}">View Profile</a>

            </div>

            </div>`;
      document.getElementById("ces").appendChild(StyleBoxDiv);
    }
  });


  // for 3rd year section
  fetch("third_team.json")
  .then((response) => response.json())
  .then((data) => {
    let links = data;

    for (let i = 0; i < links.length; i++) {
      console.log(links.length);
      let StyleBoxDiv = document.createElement("div");
      StyleBoxDiv.innerHTML = `<div class="stylebox">
            <div class="image">
                 <img src="https://avatars.githubusercontent.com/${links[i].Github_username}" alt="">
             </div>
            <p>${links[i].name}</p>
            
            <div class="btn-group">
            <a target="_blank" href="https://github.com/${links[i].Github_username}">View Profile</a>

            </div>

            </div>`;
      document.getElementById("third").appendChild(StyleBoxDiv);
    }
  });
