alert('Adivinhe o número!');
let mult = parseInt(Math.random()*100 + 1);
let nmra = parseInt(Math.random() * mult);
console.log(nmra);
let tentativas = 1;
let chute;

while(chute != nmra){
    chute = prompt(`Chute um número entre 0 e ${mult}`);
    if(chute==nmra){
        break;
    }
    else if (chute > nmra){
        alert(`O número é menor que ${chute}`);
    }
    else{
        alert(`O número é maior que ${chute}`);
    }
    tentativas ++;
    console.log(tentativas);
}

let acerto = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou com ${tentativas} ${acerto}!`);
