const h3 = document.querySelector("h3");
console.log(h3);

const generate = function () {
  for (let i = 0; i < 77; i++) {
    const numeri = i;

    const singoliNumeri = document.createElement("h3");
    singoliNumeri.innerText = i;
    singoliNumeri.classList.add("numbers");
    h3.appendChild(singoliNumeri);
  }
};

const buttonGenera = document.getElementById("genera");
buttonGenera.onclick = generate;

const pesca = function () {
  const numero = Math.floor(Math.random() * 100);
  if (numero > 77) {
    pesca();
  }
  const p = document.getElementById("p-numeri");

  p.innerText = numero;
  if (p.textContent === h3.textContent) {
  }
};

const buttonPesca = document.getElementById("pesca");
buttonPesca.onclick = pesca;
