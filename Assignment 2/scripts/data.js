function wyswietlDane()
{
  var data = new Date();
  var godziny = data.getHours();
  var minuty = data.getMinutes();
  var sekundy = data.getSeconds();
  var czas = godziny;
  czas += ((minuty < 10) ? ":0" : ":") + minuty;
  czas += ((sekundy < 10) ? ":0" : ":") + sekundy;
  var miesiac = data.getMonth() + 1;
  if (miesiac < 9){
    miesiac = "0" + miesiac;
  }
  var dzien = data.getDate();
  if (dzien < 9){
    dzien = "0" + dzien;
  }
  var rok = data.getYear();
  if (rok < 1000){
    rok = 2000 + rok - 100;
  }
  var dzisiaj = dzien + "." + miesiac + "." + rok;

  var dzienTygodnia = data.getDay();
  switch(dzienTygodnia){
    case 0: dzienTygodnia = "niedziela"; break;
    case 1: dzienTygodnia = "poniedziałek"; break;
    case 2: dzienTygodnia = "wtorek"; break;
    case 3: dzienTygodnia = "środa"; break;
    case 4: dzienTygodnia = "czwartek"; break;
    case 5: dzienTygodnia = "piątek"; break;
    case 6: dzienTygodnia = "sobota"; break;
  }

  var tekst = "Dziś jest " + dzienTygodnia + ", " + dzisiaj;
  tekst += "<BR>";
  tekst += czas;
  document.getElementById("DrugiObszarBoczny").innerHTML = tekst;
  timerID = setTimeout("wyswietlDane()",1000);
}