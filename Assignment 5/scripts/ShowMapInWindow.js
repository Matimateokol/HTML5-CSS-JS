function myWindow(url) { 
    const newWindow = window.open(url, 'Map of your neighborhood', 'toolbar=0',
    'menubar=0',
    'scrollbars=0',
    'resizable=0',
    'status=0',
    'location=0',
    'directories=0',
    'top=20',
    'left=20',
    'height=600',
    'width=800') 
} 
    
document.getElementById('map').addEventListener('click', function() { myWindow('map.html') });
    