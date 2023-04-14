function calcular() {
    console.log()

    let a = Number(document.getElementById("input_a").value);

    let b = Number(document.getElementById("input_b").value);

    let c = Number(document.getElementById("input_c").value);

    let x = 0, x1 = 0, x2 = 0;

    let delta = b ** 2 - 4 * a * c
    console.log("o delta: " + delta);

    if (delta == 0) {
        alert("Delta é igual a " + delta)
    } else {
        alert("Delta é igual a " + delta)
        x = Math.sqrt(delta)
        console.log("x: " + x)
        console.log("a raiz de Delta: " + x);
        x1 = (-b + x) / (2 * a);

        console.log("a raiz de x1: " + x1);
        alert("O resultado de x1 é " + x1)
        x2 = (-b - x) / (2 * a)

        alert("O resultado de x2 é " + x2)
        console.log("a raiz de x2: " + x2);
    }

}