function add() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a + b);
}
function addNum(num) {
    document.getElementById("display").value += num;
}


function sub() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a - b);
}

function mul() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a * b);
}

function div() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a / b);
}
