function findTheBiggestNumber()
{
    //Selecting the input value and getting its value
    const inputValue = document.getElementById("Liczby").value;

    if (inputValue.length < 7 ) {
        return alert("Wprowadzono zbyt mało liczb");
    }

    //Converting "inputValue" into an array of numbers
    var array = Array.from(inputValue.toString()).map(Number);

    //Finding the biggest element of the "array"
    var theBiggestNumber = Math.max.apply(null, array);

    //Printing the largest number
    alert('Największa z podanych liczb to: ' + theBiggestNumber);
}
