function myWindow(url) { 
    const newWindow = window.open(url, 'Mapa kampusu UG w Sopocie', 'toolbar=0',
    'menubar=0',
    'scrollbars=0',
    'resizable=0',
    'status=0',
    'location=0',
    'directories=0',
    'top=20',
    'left=20',
    'height=500',
    'width=700') 
} 
    
document.getElementById('guzikOkna').addEventListener('click', function() { myWindow('https://www.wspolrzedne-gps.pl/') });
    