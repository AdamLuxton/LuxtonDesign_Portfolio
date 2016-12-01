//Javascript Document
(function(){
"use strict"
//console.log("SEAF Fired");

//variables

//HAMBURGER ICON
var hamSVG;
var clicked = false;
var navLinks = document.querySelectorAll('.navA');
var hamBG = document.querySelector('#navBackground');
var hamburgerColor = "#FFF";

var header = document.querySelector('header');
var headerContent = document.querySelector('#headerContent');
var landingTexth1 = document.querySelector('#landingText h1');
var landingTextp = document.querySelector('#landingText p');
var landingTexth2 = document.querySelector('#landingText h2');
var landingTextBut = document.querySelector('#landingContent button');
var squareDivs = document.querySelectorAll('.square');
var portDivs = document.querySelectorAll('.portfolioContent');
var firstTime = true;
var iconsFirstTime = [true, true, true];

//SCROLL links
var scrollToPortfolio = document.querySelector("#button1");
var landing = document.querySelector("#landingPage");
var portfolio = document.querySelector('#portfolio');
var about = document.querySelector('#aboutSection');
var buttonSection = document.querySelector('#buttonSection');

///////////LANDING FUNCTIONS////////////////////////
function hamLoad(e){
  //console.log("loading");
  //hamSVG = this.contentDocument;
  //console.log("running");
  //console.log(hamSVG);
  resetHamburger();
}

function resetHamburger(){
  document.querySelector('#hamburgerIcon').addEventListener('click', hamburgerClick, false);
}

function hamburgerClick(){
  document.querySelector('#hamburgerIcon').removeEventListener('click', hamburgerClick, false);
  if (clicked == false){
    hamBG.style.display = "block";
    //console.log("running");
    TweenMax.to(document.querySelector("#line1"), 0.5, {attr:{x1:716.3, y1:283.7, x2:283.7, y2: 716.3}, ease:Power1.easeOut});
    TweenMax.to(document.querySelector("#line2"), 0.5, {attr:{x1:525, y1:500.1, x2:525, y2: 500.1}, ease:Power1.easeOut});
    TweenMax.to(document.querySelector("#line3"), 0.5, {attr:{x1:716.3, y1:716.4, x2:283.7, y2:283.8}, ease:Power1.easeOut});
    TweenMax.to(document.querySelectorAll(".st1"), 0.5, {stroke: "#FFF", ease:Power1.easeOut});
    TweenMax.to(document.querySelector("#hamburgerIcon"), 0.5, {top: "100px", ease:Power1.easeOut});
    TweenMax.to(hamBG, 0.5, {opacity:0.5, ease:Power1.easeOut});
    TweenMax.to(header, 0.5, {height: "80px", ease:Power1.easeOut});
    for (var i=0; i<navLinks.length; i++){
    TweenMax.to(navLinks[i], 1, {scale:1, ease:Elastic.easeOut, delay: 0.5 + (i/8), onComplete: resetHamburger});
    }

    clicked = true;
  }
  else{
    TweenMax.to(document.querySelector("#line1"), 0.5, {attr:{x1:805.9, y1:186.6, x2:194.1, y2: 186.6}, ease:Power1.easeOut});
    TweenMax.to(document.querySelector("#line2"), 0.5, {attr:{x1:805.9, y1:500.1, x2:194.1, y2: 500.1}, ease:Power1.easeOut});
    TweenMax.to(document.querySelector("#line3"), 0.5, {attr:{x1:805.9, y1:813.6, x2:194.1, y2:813.6}, ease:Power1.easeOut});
    TweenMax.to(document.querySelectorAll(".st1"), 0.5, {stroke: hamburgerColor, ease:Power1.easeOut});
    TweenMax.to(hamBG, 0.5, {opacity:0, ease:Power1.easeOut, onComplete:hamBGReset});
    for (var i=0; i<navLinks.length; i++){
    TweenMax.to(navLinks[i], 0.5, {scale:0, ease:Elastic.easeIn});
  }
    TweenMax.to(header, 0.5, {height: "0", ease:Power1.easeOut, delay: 0.5});
    TweenMax.to(document.querySelector("#hamburgerIcon"), 0.5, {top: "20px", ease:Power1.easeOut, delay: 0.5, onComplete: resetHamburger});

    clicked = false;
  }

}

function hamBGReset(){
  hamBG.style.display = "none";
  hamBG.addEventListener('click', hamBGClick, false);
}

function hamBGClick(){
  clicked = true;
  hamBG.removeEventListener('click', hamBGClick, false);
  hamburgerClick();
}

function loadLanding(){

  window.addEventListener('scroll', checkScroll, false);
  //console.log(document.querySelector("#hamburgerIcon"));
  TweenMax.from(landingTextp, 1, {opacity: 0, ease:Power2.easeOut, delay: 1});
  TweenMax.from(landingTexth1, 1, {opacity: 0, ease:Power2.easeOut, delay: 2});
  TweenMax.from(landingTexth2, 1, {opacity: 0, ease:Power2.easeOut, delay: 3});
  TweenMax.from(landingTextBut, 1, {opacity: 0, ease:Power2.easeOut, delay: 4});
  adjustSquare();
  checkScroll();

}

function adjustSquare(){

  for (var i = 0; i < squareDivs.length; i++) {
    //console.log(squareDivs[i].offsetWidth);
    if (squareDivs[i].offsetWidth < window.innerHeight) {
      squareDivs[i].style.height = squareDivs[i].offsetWidth + "px";
    }
    else {
      squareDivs[i].style.height = window.innerHeight + "px";
    }
    squareDivs[i].style.height = Math.floor(squareDivs[0].offsetWidth) + "px";

  }

  if (!(window.matchMedia("(min-width: 48em)").matches)) {
  /* the viewport is at least 400 pixels wide */
  document.querySelector('#aboutText').style.height = window.innerHeight + "px";
  document.querySelector('#aboutImage').style.height = (window.innerHeight)/2 + "px";
  //document.querySelector('#skillContentDiv').style.height = window.innerHeight + "px";
}
else{
  document.querySelector('#aboutText').style.height = "300px";
  document.querySelector('#aboutImage').style.height = "300px";
  //document.querySelector('#skillContentDiv').style.height = "500px";
}


}

function checkScroll(){
  hamburgerScroll();
  if (window.scrollY >= ((document.querySelector("#aboutHeader").offsetTop)-200)){
    console.log("running");
    TweenMax.to(document.querySelector("#aboutHeader"), 0.5, {transform:"scale(1,1)", delay: 0.25, ease:Power1.easeOut});
    TweenMax.to(document.querySelector("#aboutHeaderContent"), 1, {opacity:1, delay: 1, ease: Power1.easeOut});
    if (!(window.matchMedia("(min-width: 48em)").matches)) {
      if (window.scrollY >= ((document.querySelector("#aboutContent").offsetTop)-200)){
        TweenMax.to(document.querySelector("#aboutContent"), 1, {opacity:1, delay: 1, ease: Power1.easeOut});
      }
    }
    else{
      TweenMax.to(document.querySelector("#aboutContent"), 1, {opacity:1, delay: 1.5, ease: Power1.easeOut});
    }
  }

if (!(window.matchMedia("(min-width: 48em)").matches)) {
    if(window.scrollY >= ((document.querySelector('#buttonSection').offsetTop)-300)){
      var boxes = document.querySelectorAll('.buttonContainer');
      var buttons = document.querySelectorAll('.comIcons');
      TweenMax.to(document.querySelector('#buttonSection'), 1, {opacity:1, ease:Power1.easeOut});
      for (var i = 0; i < boxes.length; i++) {
        TweenMax.to(boxes[i], 0.5, {opacity:1, delay: ((i/2)), ease: Power1.easeOut});
        if (iconsFirstTime[i] == true){
        TweenMax.from(buttons[i], 1, {scale:0, transformOrigin: "center", delay: (0.5+(i/2)), ease: Elastic.easeOut});
        iconsFirstTime[i] = false;
        }
      }
    }
  }

else{
  if(window.scrollY >= ((document.querySelector('#buttonSection').offsetTop)-300)){
    var boxes = document.querySelectorAll('.buttonContainer');
    var buttons = document.querySelectorAll('.comIcons');
    //TweenMax.to(document.querySelector('#buttonSection'), 1, {opacity:1, ease:Power1.easeOut});
    for (var i = 0; i < boxes.length; i++) {
      TweenMax.to(boxes[i], 0.5, {opacity:1, delay:(0.5+(i/2)), ease: Power1.easeOut});
      if (iconsFirstTime[i] == true){
      TweenMax.from(buttons[i], 1, {scale:0, transformOrigin: "center", delay: (0.5+(i/2)), ease: Elastic.easeOut});
      iconsFirstTime[i] = false;
    }
    }
  }
}

    if (window.scrollY >= ((portfolio.offsetTop)-400)) {
      //console.log("running");
      for (var i = 0; i < squareDivs.length; i++) {
        //console.log(window.scrollY);
        //console.log(squareDivs[i].offsetTop - 100);
        if (window.scrollY >= ((squareDivs[i].offsetTop)+(portfolio.offsetTop)-400)) {
          TweenMax.to(squareDivs[i], 1, {opacity: 1, ease:Power1.easeOut, delay:(i/8)});
          TweenMax.to(portDivs[i], 1, {opacity: 1, ease:Power1.easeOut, delay: ((i/8)+1)});
          //console.log("ran");
        }
      }
    }
}

function hamburgerScroll(){

  //console.log("running");

    if (!(window.matchMedia("(min-width: 62em)").matches)) {
      if(window.scrollY < (document.querySelector('#aboutSection').offsetTop + 175)){
        //console.log("ran");
        TweenMax.to(document.querySelectorAll('.st1'), 0.5, {stroke:"#FFF", ease:Power1.easeOut});
        hamburgerColor = "#FFF";
      }
      else if(window.scrollY >= (document.querySelector('#aboutSection').offsetTop + 175)) {
        //console.log("changed colour");
        TweenMax.to(document.querySelectorAll('.st1'), 0.5, {stroke:"#0F7173", ease:Power1.easeOut});
        hamburgerColor = "#0F7173";
        if(window.scrollY >= (document.querySelector('#buttonSection').offsetTop)) {
          //console.log("changing color");
          TweenMax.to(document.querySelectorAll('.st1'), 0.5, {stroke:"#FFF", ease:Power1.easeOut});
          hamburgerColor = "#FFF";
        }
      }
    }
    else{
      if(window.scrollY < ((document.querySelector('#aboutSection').offsetTop)-30)){
        //console.log("ran");
        TweenMax.to(document.querySelectorAll('.st1'), 0.5, {stroke:"#FFF", ease:Power1.easeOut});
        hamburgerColor = "#FFF";
      }
      else if(window.scrollY >= ((document.querySelector('#aboutSection').offsetTop)-30)) {
        //console.log("changed colour");
        TweenMax.to(document.querySelectorAll('.st1'), 0.5, {stroke:"#0F7173", ease:Power1.easeOut});
        hamburgerColor = "#0F7173";
        if(window.scrollY >= ((document.querySelector('#buttonSection').offsetTop)-30)) {
          //console.log("changing color");
          TweenMax.to(document.querySelectorAll('.st1'), 0.5, {stroke:"#FFF", ease:Power1.easeOut});
          hamburgerColor = "#FFF";
        }
      }
    }
}

function scrollAbout(e){
  //console.log("running");
  e.preventDefault();
  if (clicked==true){
  hamburgerClick();
  }
  TweenMax.to(window, 2, {scrollTo:about, ease:Power4.easeInOut});
}

function scrollPortfolio(e){
  //console.log("running");
  e.preventDefault();
  if (clicked==true){
  hamburgerClick();
  }
  TweenMax.to(window, 2, {scrollTo:portfolio, ease:Power4.easeInOut});
}


//listeners
document.addEventListener("DOMContentLoaded", function(event) {
  //document.querySelector("#hamburgerIcon").addEventListener("load", hamLoad, false);
  document.querySelector('#hamburgerIcon').addEventListener('click', hamburgerClick, false);
  window.addEventListener('load', loadLanding, false);
  window.addEventListener('resize', adjustSquare, false);
  scrollToPortfolio.addEventListener('click', scrollAbout, false);
  document.querySelector('#aboutLink').addEventListener('click', scrollAbout, false);
  document.querySelector('#portLink').addEventListener('click', scrollPortfolio, false);
  hamBG.addEventListener('click', hamBGClick, false);
});


})();
