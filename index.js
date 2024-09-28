const card = document.getElementById("card");
const text = document.getElementById("text");
const error = document.getElementById("error");
const loading = document.getElementById("loading");

card.addEventListener("click", () => {

loading.innerText = "fectching..."
    fetch("https://api.adviceslip.com/advice")
    .then((res)=>res.json())
    .then((advice)=>  {
        text.innerText =advice.slip.advice;
        loading.innerText = "";
    }).catch((err)=> {
        error.innerText = err;
    });
});