function findTheBiggestNumber()
{
    //Selecting the input value and getting its value
    var inputValue = document.getElementById("Liczby").value;
    var zestaw = String.split('').map((i) => { return Number(i); })
    var max = Math.max(zestaw)
    //Printing the largest number
    console.log('Największa z podanych liczb to: ' + max)
}