var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "<img class='sonic-wins' src='https://media3.giphy.com/media/aK0uRwsEBTUY0/200w.webp?cid=ecf05e4741fa248a6f75cc79ef15959273f619c5bd2b9ede&rid=200w.webp'> Sonic gagne <img class='knuckles-loses' src='https://media0.giphy.com/media/TEFRzeOOYH5jV4SCkw/200w.webp?cid=ecf05e47964d9a46e1cec45d0479bc54bedfc5f104e71e89&rid=200w.webp'>";
    }
else if (randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").innerHTML = "<img class='sonic-loses' src='https://media2.giphy.com/media/hSLAFQU7NsNhQC8wXM/200w.webp?cid=ecf05e47bcf14c7ee319846c5708d3047a0db485a4bc9169&rid=200w.webp'> Knuckles gagne <img class='knuckles-wins' src='https://media1.giphy.com/media/KdqSoCPmDRJ1kL65Mp/200w.webp?cid=ecf05e47bcf14c7ee319846c5708d3047a0db485a4bc9169&rid=200w.webp'>";
    }
else if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "<img class='draw' src='https://media1.giphy.com/media/iFsZOWWI3sqSwZQzjT/200w.webp?cid=ecf05e474e1f872d332d03aa1de57ef9efb404704853e8aa&rid=200w.webp'> Egalité <img class='tails' src='https://media1.giphy.com/media/1NQxTWVbSm14nwl0Ls/200w.webp?cid=ecf05e472a84e3840a59539827335a2b05b89d17750c2663&rid=200w.webp'>";
}