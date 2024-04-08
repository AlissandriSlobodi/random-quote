const button = document.querySelector("button");
const p = document.querySelector('p');
const API = "https://api.quotable.io/random"

button.addEventListener("click", onRandomizerClick);

function onRandomizerClick() {
    fetch(API).then(res => res.json()).then(data => {
        p.innerText = data.content;
    }).catch(() => alert("error fetching quote!"));
}