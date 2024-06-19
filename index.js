var input;
var numero1;
var numero2;

console.log("Digite seu primeiro número.");
process.stdin.on("data", function (data) {
  input = Number(data.toString().trim());
  if (!numero1) {
    numero1 = input;

    console.log("Digite seu segundo número.");
  } else {
    numero2 = input;
    if (numero1 > numero2) {
      i = numero1;
    } else {
      i = numero2;
    }

    for (i; i <= numero1 * numero2; i++) {
      if (i % numero1 == 0 && i % numero2 == 0) {
        console.log("MMC: " + i);
        break;
      }
    }
  }
});
