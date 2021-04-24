function Fibonacci() {
    const n = document.getElementById("Fibonacci").value;
    
    if ( n === '' || n === null || n == NaN || n === undefined) {
        return alert('Nie wprowadzono żadnej liczby');
    } else if ( n < 0 ) {
        return alert('Wprowadzono liczbę ujemną!')
    } else {
        const n = parseInt(document.getElementById("Fibonacci").value);
        var i;
        var fib = []; // Initializing an array
        
        fib[0] = 0;
        fib[1] = 1;

        for (i = 2; i <= n; i++) {
            // Next fibonacci number = previous + one before previous
            // Translated to JavaScript:
            fib[i] = fib[i - 2] + fib[i - 1];
        }
        
        alert("Element nr " + n + " ciągu Fibonacciego to: " + fib[n])
    }
}