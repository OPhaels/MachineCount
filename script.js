function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("boxEnd").innerHTML = "";
}

function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.slice(0, -1);
}

function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;

  if (resultado) {
    try {
      var calculo = eval(resultado);
      document.getElementById("resultado").innerHTML = calculo;
      (document.getElementById("boxEnd").innerHTML = resultado), calculo;

      // Reinicia a animação para que ela ocorra sempre
      var box = document.getElementById("boxEnd");
      box.style.animation = "none";
      void box.offsetWidth; // Força um reflow para resetar a animação
      box.style.animation = "fadeIn 1s ease-in-out forwards";
    } catch (e) {
      document.getElementById("resultado").innerHTML = "Erro";
      document.getElementById("boxEnd").innerHTML = "Erro";
    }
  }
}
