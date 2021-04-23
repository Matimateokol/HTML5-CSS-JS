function findTheBiggestNumber()
{
    //Selecting the input value and getting its value
    var inputValue = document.getElementById("Liczby").value;
    var numbers = '1234567';
    var input = String.split('').map((i) => { return Number(i); });
    var max = Math.max(zestaw);
    //Printing the largest number
    console.log('Największa z podanych liczb to: ' + max);
}
