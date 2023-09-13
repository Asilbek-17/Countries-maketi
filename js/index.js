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
    elHeader.classList.toggle("site-header-dark");
    elHeaderLink.classList.toggle("header-link-dark");
    elHero.classList.toggle('hero-dark');
    elHeroInp.classList.toggle("hero-input-dark");
    elHeaderBtn.classList.toggle("header-btn-dark");
    elHeroSelect.classList.toggle("hero-select-dark");
})


var elList = document.querySelector('.hero-list');


fetch('https://restcountries.com/v3.1/all')
.then(function(res){return res.json()})
.then(function(data){
    data.forEach(function(count){
        var newImg = document.createElement('img');
        newImg.src = count.flags.svg;
        newImg.width = '264';
        newImg.height = '160';
        newImg.classList.add('hero-img');
        
        var newTitle = document.createElement('h2');
        newTitle.innerHTML = count.name.common;
        newTitle.classList.add('hero-title');
        
        var newTextP = document.createElement('p');
        newTextP.innerHTML = 'Population: ';
        newTextP.classList.add('hero-text')
        
        var newPopulation = document.createElement('span');
        newPopulation.innerHTML = count.population;
        newPopulation.classList.add('hero-span');
        newTextP.appendChild(newPopulation);
        
        var newTextR = document.createElement('p');
        newTextR.innerHTML = 'Region: ';
        newTextR.classList.add('hero-text')
        
        var newRegion = document.createElement('span');
        newRegion.innerHTML = count.region;
        newRegion.classList.add('hero-span');
        newTextR.appendChild(newRegion)
        
        var newTextC = document.createElement('p');
        newTextC.innerHTML = 'Capital: ';
        newTextC.classList.add('hero-text')
        
        var newCapital = document.createElement('span');
        newCapital.innerHTML = count.capital;
        newCapital.classList.add('hero-span');
        newTextC.appendChild(newCapital);
        
        var newItem = document.createElement('li');
        newItem.classList.add('hero-item');
        newItem.appendChild(newImg);
        newItem.appendChild(newTitle);
        newItem.appendChild(newTextP);
        newItem.appendChild(newTextR);
        newItem.appendChild(newTextC);
        
        elList.appendChild(newItem);
        
        
        elHeaderBtn.addEventListener("click", function(){
            elHeader.classList.toggle("site-header-dark");
            elHeaderLink.classList.toggle("header-link-dark");
            elHero.classList.toggle('hero-dark');
            elHeroInp.classList.toggle("hero-input-dark");
            elHeaderBtn.classList.toggle("header-btn-dark");
            elHeroSelect.classList.toggle("hero-select-dark");
            
            
            newItem.classList.toggle("hero-item-dark");
            newTitle.classList.toggle("hero-title-dark");
            newTextP.classList.toggle("hero-text-dark");
            newTextR.classList.toggle("hero-text-dark");
            newTextC.classList.toggle("hero-text-dark");
        })
    })
})
.catch(function(error){console.log(error)})




var elForm = document.querySelector('.hero-form');
var elInp = document.querySelector('.hero-input');

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    var inpValue = elInp.value;
    
    if(inpValue == ''){
        window.location.reload()
    }
    
    fetch('https://restcountries.com/v3.1/name/' + inpValue)
    .then(function(res){return res.json()})
    .then(function(data){
        elList.innerHTML = '';
        
        data.forEach(function(dav){
            var newImg = document.createElement('img');
            newImg.src = dav.flags.svg;
            newImg.width = '264';
            newImg.height = '160';
            newImg.classList.add('hero-img');
            
            var newTitle = document.createElement('h2');
            newTitle.innerHTML = dav.name.common;
            newTitle.classList.add('hero-title');
            
            var newTextP = document.createElement('p');
            newTextP.innerHTML = 'Population: ';
            newTextP.classList.add('hero-text')
            
            var newPopulation = document.createElement('span');
            newPopulation.innerHTML = dav.population;
            newPopulation.classList.add('hero-span');
            newTextP.appendChild(newPopulation);
            
            var newTextR = document.createElement('p');
            newTextR.innerHTML = 'Region: ';
            newTextR.classList.add('hero-text')
            
            var newRegion = document.createElement('span');
            newRegion.innerHTML = dav.region;
            newRegion.classList.add('hero-span');
            newTextR.appendChild(newRegion)
            
            var newTextC = document.createElement('p');
            newTextC.innerHTML = 'Capital: ';
            newTextC.classList.add('hero-text')
            
            var newCapital = document.createElement('span');
            newCapital.innerHTML = dav.capital;
            newCapital.classList.add('hero-span');
            newTextC.appendChild(newCapital);
            
            var newItem = document.createElement('li');
            newItem.classList.add('hero-item');
            newItem.appendChild(newImg);
            newItem.appendChild(newTitle);
            newItem.appendChild(newTextP);
            newItem.appendChild(newTextR);
            newItem.appendChild(newTextC);
            
            elList.appendChild(newItem);
            
            elHeaderBtn.addEventListener("click", function(){
                
                newItem.classList.toggle("hero-item-dark");
                newTitle.classList.toggle("hero-title-dark");
                newTextP.classList.toggle("hero-text-dark");
                newTextR.classList.toggle("hero-text-dark");
                newTextC.classList.toggle("hero-text-dark");
            })
        })
    })
})




var elSelect = document.querySelector('.hero-select');

elSelect.addEventListener('change', function(evt){
    
    
    fetch('https://restcountries.com/v3.1/region/' + evt.target.value)
    .then(function(res){return res.json()})
    .then(function(data){
        elList.innerHTML = '';
        
        
        data.forEach(function(dav){
            var newImg = document.createElement('img');
            newImg.src = dav.flags.svg;
            newImg.width = '264';
            newImg.height = '160';
            newImg.classList.add('hero-img');
            
            var newTitle = document.createElement('h2');
            newTitle.innerHTML = dav.name.common;
            newTitle.classList.add('hero-title');
            
            var newTextP = document.createElement('p');
            newTextP.innerHTML = 'Population: ';
            newTextP.classList.add('hero-text')
            
            var newPopulation = document.createElement('span');
            newPopulation.innerHTML = dav.population;
            newPopulation.classList.add('hero-span');
            newTextP.appendChild(newPopulation);
            
            var newTextR = document.createElement('p');
            newTextR.innerHTML = 'Region: ';
            newTextR.classList.add('hero-text')
            
            var newRegion = document.createElement('span');
            newRegion.innerHTML = dav.region;
            newRegion.classList.add('hero-span');
            newTextR.appendChild(newRegion)
            
            var newTextC = document.createElement('p');
            newTextC.innerHTML = 'Capital: ';
            newTextC.classList.add('hero-text')
            
            var newCapital = document.createElement('span');
            newCapital.innerHTML = dav.capital;
            newCapital.classList.add('hero-span');
            newTextC.appendChild(newCapital);
            
            var newItem = document.createElement('li');
            newItem.classList.add('hero-item');
            newItem.appendChild(newImg);
            newItem.appendChild(newTitle);
            newItem.appendChild(newTextP);
            newItem.appendChild(newTextR);
            newItem.appendChild(newTextC);
            
            elList.appendChild(newItem);
            
            elHeaderBtn.addEventListener("click", function(){
                
                newItem.classList.toggle("hero-item-dark");
                newTitle.classList.toggle("hero-title-dark");
                newTextP.classList.toggle("hero-text-dark");
                newTextR.classList.toggle("hero-text-dark");
                newTextC.classList.toggle("hero-text-dark");
            })
        })
    })
})