let parabens_tentativas = document.querySelector("#parabens");
let buton = document.querySelector("#button");
let mult = parseInt(Math.random() * 100 + 1);
let nmax = document.querySelector("#nmaxhtml");
nmax.innerHTML = mult;
let nmra = parseInt(Math.random() * mult);
console.log(`Número aleatório: ${nmra}`);
let tentativas = 1;
let chute;

const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    const numero = document.querySelector("#numero");


    let value = numero.value;
    console.log(value);
    if (value < nmra) {
        parabens_tentativas.innerHTML = `O número é maior que ${value}`;
        tentativas++;
    }
    else if (value > nmra) {
        parabens_tentativas.innerHTML = `O número é menor que ${value}`;
        tentativas++;
    }
    else {
        let acerto = tentativas > 1 ? 'tentativas' : 'tentativa';
        parabens_tentativas.innerHTML = `Parabéns, você acertou com ${tentativas} ${acerto}`;
        buton.style.visibility = 'visible';
        troph.style.display = 'block';
    }
}); 





