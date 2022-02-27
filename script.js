const adviceTag = document.querySelector(".advice-header");
const adviceQuote = document.querySelector("p");
const buttonGenerate = document.querySelector("button");
const url = 'https://api.adviceslip.com/advice';
const divider = document.querySelector(".divider > img");

const mediaQuery = window.matchMedia('(min-width: 1440px)');

function myFunction(x){
    if(x.matches){
        divider.setAttribute("src", "images/pattern-divider-desktop.svg");
    }
    else{
        divider.setAttribute("src", "images/pattern-divider-mobile.svg");
    }
}

myFunction(mediaQuery);
mediaQuery.addListener(myFunction);

/* === FETCH API ==== */
const fetchAPI = ()=> { 
    fetch(url, {cache: "no-cache"})
    .then(response => { return response.json() })
    .then(data => {
        const adviceId = data.slip.id;
        adviceTag.innerHTML = `ADVICE #${adviceId}`;
        adviceQuote.innerHTML = `❝${data.slip.advice}❞`;
    }).catch(e => {
        alert(e)
    });  
};

buttonGenerate.addEventListener("click", function(){
    setTimeout(() => {
        fetchAPI();
    }, 500)
})