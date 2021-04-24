
const Imie = document.getElementById('Imię')
const Nazwisko = document.getElementById('Nazwisko')
const Email = document.getElementById('Email')
const form = document.getElementById('form')
const messageElement = document.getElementById('message')

//zmienne do testowania wyrażeń regularnych
const nameReg = new RegExp('^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]{3,}$', 'g');
const surnameReg = new RegExp('^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]{3,}$', 'g'); 
const mailReg = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i')

form.addEventListener('submit', (e) => {
    let messages = []

    function startsWithCapital(word){
        return word.charAt(0) === word.charAt(0).toUpperCase()
    }

    if (!nameReg.test(Imie.value)) {
        messages.push('Użyto niedozwolonych polskich znaków w imieniu')
    }

    if (!startsWithCapital(Imie.value)) {
        messages.push('Imiona zaczynamy wielką literą!')
    }

    if (!surnameReg.test(Nazwisko.value)) {
        messages.push('Użyto niedozwolonych polskich znaków w nazwisku')
    }

    if (!startsWithCapital(Nazwisko.value)) {
        messages.push('Nazwiska zaczynamy wielką literą!')
    }

    if (!mailReg.test(Email.value)) {
        messages.push('Podano nieprawidłowy adres e-mail')
    }

    if (messages.length > 0) {
        e.preventDefault()
        messageElement.innerText = messages.join(',\n')
    }

    else {
        alert("Dziękujemy, wprowadzono poprawne dane\n" + "Imię: " + Imie.value + "\nNazwisko: " + Nazwisko.value + "\nE-mail: " + Email.value)
    }
})