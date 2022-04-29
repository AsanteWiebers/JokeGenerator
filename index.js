const joke = document.getElementById("joke");
const punchline = document.getElementById("punchline");
document.getElementById("joke-button").addEventListener("click", attemptJoke)
document.getElementById("punchline-button").addEventListener("click", revealJoke)

const grappen = [ 
    {  grap : "Welke bril kun je niet op je neus zetten",
       antwoord: "Een wc-bril!"
       
    } ,
    {
        grap: "Wat krijg je als je een lucifer met een duizendpoot kruist?",
        antwoord: "Een lopend vuurtje"
    } , 
    {
        grap: "Wat kun je eten en ontploft?",
        antwoord: "Een BOEMkool."
    },
    {
        grap: "Wat is groen en rent door het bos?",
        antwoord: "Een dophertje!"
    },
    {
        grap: "Wat is het toppunt van lef?",
        antwoord: "Bij de bakker een brood stelen en vragen om het bonnetje!"
    },
    {
        grap: "Wat begint met een T en zit er vol mee? ",
        antwoord: "Een theepot!"
    }
]

let randomNum = 0;

console.log(randomNum);

function attemptJoke() { 
    randomNum = Math.floor( Math.random() * grappen.length);
    punchline.textContent = grappen[randomNum].antwoord ;
    joke.textContent = grappen[randomNum].grap;
    punchline.style.visibility = 'hidden';

}
 
function revealJoke() {
    punchline.style.visibility = 'visible';
   

}




 