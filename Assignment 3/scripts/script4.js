function theLargestDivider() {
    const Input1 = document.getElementById("Numer1").value;
    const Input2 = document.getElementById("Numer2").value;

    var a = Input1;
    var b = Input2;
    var R;

    if ((a<0) || (b<0)) {
        return alert("Proszę wprowadzić liczby większe niż 0")
    }
    //Implementation of Euclidean Algorithm:
    while ((a % b) > 0) {
        R = a % b;
        a = b;
        b = R;
    }

    alert("Największy wspólny dzielnik to: " + b);
} 