document.getElementById("github-portfolio").onclick = function(){
  window.open("https://github.com/amar-exe",'_blank');
}

$(".uptime-images span").click(function() {
    $(".uptime-images span").removeClass("active");
    $(this).addClass("active");
    $(".active").css("border-color", $(this).attr("data-color-sec"))
    $(".uptime").css("background", $(this).attr("data-color-primary"));
    $(".content h2").css("color", $(this).attr("data-color-sec"));
    $(".content h3").css("color", $(this).attr("data-color-sec"));
    $(".container .imgBx").css("background", $(this).attr("data-color-sec"));
    $(".container .details button").css("background", $(this).attr("data-color-sec"));
    $(".imgBx img").attr('src', $(this).attr("data-pic"));
});

var slideIndex = 1;

function plusDivs(n) {  
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i,
      x = document.getElementsByClassName("video-slide"),
      y = document.getElementsByTagName("video");
  if (n > x.length) {
    slideIndex = 1
  }
  
  if (n < 1) {
    slideIndex = x.length
  }
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    y[i].pause();
  }
  
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].play(); 
  switch (slideIndex) {
    case 1:
        $("#lastfm-description").html("List of all countries, our current country is on top. Searching for countries");
        break;
    case 2:
        $("#lastfm-description").html("Changing grid layout, sorting artists. Note: All the images are LOADED, but removed due to copyright");
        break;
    case 3:
        $("#lastfm-description").html("Details about an artist. Banner, list of albums, similar artists, keywords, biography");
        break;
    case 4:
        $("#lastfm-description").html("No internet screens and warnings");
        break;
    case 5:
        $("#lastfm-description").html("Searching for artists, no data screens");
        break;
    case 6:
        $("#lastfm-description").html("Listening to music from the application");
        break;
    case 7:
        $("#lastfm-description").html("Jumping through artists, sharing artists, reading full biography and saving full biography");
        break;
    case 8:
        $("#lastfm-description").html("Full dark mode support");
        break;
    default:
        $("#lastfm-description").html("Invalid video number");
}
}

var modalInfo = {
  1: {
    title: "Twitter Clone",
    info: "Created an Twitter clone with the ability to add tweets, following, liking tweets, retweets and messages. For backend and authentication Firebase was utilized. The first part of the project was creating most important Twitter functionality, and the second part was implementing private messaging.",
    github: "https://github.com/amar-exe/twitter-clone-ios"
  },
  2: {
    title: "Open Source Contribution",
    info: "While improving my knowledge in blockchain technologies, specifically the Ethereum ecosystem, I came across an open source project called Solidity School. I became a contributor and closed some reported issues. I hope to continue maintaining this project in the future, as it is an extremely useful way of beginners learning about Solidity and how the EVM works.",
    github: "https://github.com/Aniket-Engg/solidity-school"
  },
  3: {
    title: "Sevdah Music Generator (NLP)",
    info: "As a part of a masters course, together with my colleagues, we developed THE FIRST sevdalinka generator ever created. As we are all fans of our bosnian heritage, we decided to use our Machine Learning course to delve into complexities of the Bosnian language, and create the first model to generate sevdalinka songs based on your input. We are currently polishing our paper and getting it ready for publishing.",
    github: "https://github.com/amar-exe/sevdalinka-generator"
  },
  4: {
    title: "Academic Journal Submission System",
    info: "I worked on my Universities academic journal submission system as a part of my Web Programming course. The system had upload, review, comment and approve features. It was multi role based, and multi journal based. Technologies used: FlightPHP, jQuery and d3.js",
    github: "https://new-journals.ibu.edu.ba/"
  },
};

// Get the modal
var modal = document.getElementById('preview');

// button that opens the modal
var btn = document.getElementsByClassName("button");

// <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

// open modal 
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", function() {
    var project = btn[i].parentElement;
    openModal(project);
  })
};

function openModal(project){
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img){
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
  document.getElementById("github").onclick = function(){
    window.open(modalInfo[id].github,'_blank');
  }
}

// close the modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(document).ready(function() {
  showDivs(slideIndex);
});
