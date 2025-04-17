function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}

function clean() {
  document.getElementById("resultado").innerHTML = " ";
  document.getElementById("boxEnd").innerHTML = " ";
}

function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.slice(0, -1);
}

function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado && isExpressaoValida(resultado)) {
    try {
      var calculo = eval(resultado);
      document.getElementById("resultado").innerHTML = calculo;
      document.getElementById("boxEnd").innerHTML = `${resultado} = ${calculo}`;

      var box = document.getElementById("boxEnd");
      box.style.animation = "none";
      void box.offsetWidth;
      box.style.animation = "fadeIn 1s ease-in-out forwards";

      var lista = document.getElementById("listaHistorico");
      var item = document.createElement("li");
      item.textContent = `${resultado} = ${calculo}`;
      lista.appendChild(item);
    } catch (e) {
      mostrarErro("Erro ao calcular!");
    }
  } else {
    mostrarErro("Expressão inválida!");
  }
}

function raizQuadrada() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado && isExpressaoValida(resultado)) {
    try {
      document.getElementById("resultado").innerHTML = Math.sqrt(
        eval(resultado)
      );
    } catch (e) {
      mostrarErro("Erro ao calcular raiz quadrada!");
    }
  } else {
    mostrarErro("Expressão inválida!");
  }
}

function elevarAoQuadrado() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado && isExpressaoValida(resultado)) {
    try {
      document.getElementById("resultado").innerHTML = Math.pow(
        eval(resultado),
        2
      );
    } catch (e) {
      mostrarErro("Erro ao elevar ao quadrado!");
    }
  } else {
    mostrarErro("Expressão inválida!");
  }
}

function inverso() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado && isExpressaoValida(resultado)) {
    try {
      const valor = eval(resultado);
      if (valor !== 0) {
        document.getElementById("resultado").innerHTML = 1 / valor;
      } else {
        mostrarErro("Divisão por zero!");
      }
    } catch (e) {
      mostrarErro("Erro ao calcular inverso!");
    }
  } else {
    mostrarErro("Expressão inválida!");
  }
}

function toggleTema() {
  document.body.classList.toggle("dark");
}

function mostrarErro(msg = "Erro") {
  document.getElementById("resultado").innerHTML = msg;
  document.getElementById("boxEnd").innerHTML = msg;
}

function isExpressaoValida(expr) {
  // Verifica se a expressão termina com um operador ou contém caracteres inválidos
  return /^[0-9+\-*/.%() ]+$/.test(expr) && !/[+\-*/.%]$/.test(expr);
}

document.addEventListener("keydown", function (event) {
  const tecla = event.key;
  if (!isNaN(tecla) || "+-*/.%".includes(tecla)) {
    insert(tecla);
  } else if (tecla === "Enter") {
    calcular();
  } else if (tecla === "Backspace") {
    back();
  } else if (tecla.toLowerCase() === "c") {
    clean();
  }
});
const botaoAbrir = document.getElementById("toggleHistorico");
const botaoFechar = document.getElementById("fecharHistorico");
const overlay = document.getElementById("overlayHistorico");

botaoAbrir.addEventListener("click", () => {
  overlay.style.display = "block";
});

botaoFechar.addEventListener("click", () => {
  overlay.style.display = "none";
});
