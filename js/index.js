var elHeader = document.querySelector(".site-header");
var elHero = document.querySelector(".hero");
var elHeaderLink = document.querySelector(".header-link");
var elHeaderBtn = document.querySelector(".header-btn");
var elHeroInp = document.querySelector(".hero-input");
var elHeroSelect = document.querySelector(".hero-select");
var elHeroItem = document.querySelectorAll(".hero-item");
var elHeroTitle = document.querySelectorAll(".hero-title");
var elHeroText = document.querySelectorAll(".hero-text");

elHeaderBtn.addEventListener("click", function(){
    // elHeader.style.backgroundColor = "#2B3844"
    elHeader.classList.toggle("site-header-dark");
    elHeaderLink.classList.toggle("header-link-dark");
    elHero.classList.toggle('hero-dark');
    elHeroInp.classList.toggle("hero-input-dark");
    elHeaderBtn.classList.toggle("header-btn-dark");
    elHeroSelect.classList.toggle("hero-select-dark");
    elHeroItem.forEach(function(item) {
        item.classList.toggle("hero-item-dark");
    })
    elHeroTitle.forEach(function(item) {
        item.classList.toggle("hero-title-dark");
    })
    elHeroText.forEach(function(item) {
        item.classList.toggle("hero-text-dark");
    })
})