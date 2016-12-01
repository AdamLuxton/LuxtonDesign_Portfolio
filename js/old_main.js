//Javascript Document
(function(){
"use strict"
console.log("SEAF Fired");

//variables

var header = document.querySelector('header');
var headerContent = document.querySelector('#headerContent');
var landingTexth1 = document.querySelector('#landingText h1');
var landingTextp = document.querySelector('#landingText p');
var landingTexth2 = document.querySelector('#landingText h2');
var landingTextBut = document.querySelector('#landingContent button');


//HAMBURGER ICON
var hamSVG;
var clicked = false;
var navLinks = document.querySelectorAll('.navA');
//functions

///////////LANDING FUNCTIONS////////////////////////

function loadLanding(){

  //console.log(document.querySelector("#hamburgerIcon"));
  TweenMax.from(landingTextp, 1, {opacity: 0, ease:Power2.easeOut, delay: 1});
  TweenMax.from(landingTexth1, 1, {opacity: 0, ease:Power2.easeOut, delay: 2});
  TweenMax.from(landingTexth2, 1, {opacity: 0, ease:Power2.easeOut, delay: 3});
  TweenMax.from(landingTextBut, 1, {opacity: 0, ease:Power2.easeOut, delay: 4});

}

/////////////HAMBURGER FUNCTIONS///////////////////
function hamLoad(e){
  hamSVG = this.contentDocument;
  //console.log("running");
  //console.log(hamSVG);
  resetHamburger();
}

function resetHamburger(){
  hamSVG.addEventListener('click', hamburgerClick, false);
}

function hamburgerClick(){
  hamSVG.removeEventListener('click', hamburgerClick, false);
  if (clicked == false){
    //console.log("running");
    TweenMax.to(hamSVG.querySelector("#line1"), 0.5, {attr:{x1:716.3, y1:283.7, x2:283.7, y2: 716.3}, ease:Power1.easeOut});
    TweenMax.to(hamSVG.querySelector("#line2"), 0.5, {attr:{x1:525, y1:500.1, x2:525, y2: 500.1}, ease:Power1.easeOut});
    TweenMax.to(hamSVG.querySelector("#line3"), 0.5, {attr:{x1:716.3, y1:716.4, x2:283.7, y2:283.8}, ease:Power1.easeOut});
    TweenMax.to(document.querySelector("#hamburgerIcon"), 0.5, {top: "100px", ease:Power1.easeOut});
    TweenMax.to(header, 0.5, {height: "80px", ease:Power1.easeOut});
    for (var i=0; i<navLinks.length; i++){
    TweenMax.to(navLinks[i], 1, {scale:1, ease:Elastic.easeOut, delay: 0.5 + (i/4), onComplete: resetHamburger});
    }

    clicked = true;
  }
  else{
    TweenMax.to(hamSVG.querySelector("#line1"), 0.5, {attr:{x1:805.9, y1:186.6, x2:194.1, y2: 186.6}, ease:Power1.easeOut});
    TweenMax.to(hamSVG.querySelector("#line2"), 0.5, {attr:{x1:805.9, y1:500.1, x2:194.1, y2: 500.1}, ease:Power1.easeOut});
    TweenMax.to(hamSVG.querySelector("#line3"), 0.5, {attr:{x1:805.9, y1:813.6, x2:194.1, y2:813.6}, ease:Power1.easeOut});
    for (var i=0; i<navLinks.length; i++){
    TweenMax.to(navLinks[i], 0.5, {scale:0, ease:Elastic.easeIn});
  }
    TweenMax.to(header, 0.5, {height: "0", ease:Power1.easeOut, delay: 0.5});
    TweenMax.to(document.querySelector("#hamburgerIcon"), 0.5, {top: "20px", ease:Power1.easeOut, delay: 0.5, onComplete: resetHamburger});

    clicked = false;
  }

}

//listeners
window.addEventListener('load', loadLanding, false);
document.querySelector("#hamburgerIcon").addEventListener("load", hamLoad, false);

})();
