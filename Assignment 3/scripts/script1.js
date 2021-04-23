
const Imie = document.getElementById('Imię')
const Nazwisko = document.getElementById('Nazwisko')
const Email = document.getElementById('Email')
const form = document.getElementById('form')
const messageElement = document.getElementById('message')

//zmienne do testowania wyrażeń regularnych
const nameReg = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]{3,}$/g;
const surnameReg = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]{3,}$/g; 
const mailReg = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i')

form.addEventListener('submit', (e) => {
    let messages = []


    if (Imie.value === '' || Imie.value == null) {
        messages.push('Nie podano imienia')
    } else if (!nameReg.test(Imie.value)) {
        messages.push('Użyto niedozwolonych polskich znaków w imieniu')
    }

    if (Nazwisko.value === '' || Nazwisko.value == null) {
        messages.push('Nie podano nazwiska')
    } else if (!surnameReg.test(Nazwisko.value)) {
        messages.push('Użyto niedozwolonych polskich znaków w nazwisku')
    }

    if (!mailReg.test(Email.value)) {
        messages.push('Podano nieprawidłowy adres e-mail')
    }

    if (messages.length > 0) {
        e.preventDefault()
        messageElement.innerText = messages.join(', ')
    }

    else {
        alert("Dziękujemy, wprowadzono poprawne dane")
    }
})

/*
if (!val.length) {
    console.log('Nie wpisałeś żadnej wartości!')
} else {
    console.log('Twoje imię to: ' + val[0].toUpperCase() + val.slice(1) )
}
*/

/*
const input2 = document.querySelector('form[name=Nazwisko]')
input2.addEventListener('change', function () {
    const val2 = this.value
    const reg = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]{3,}$/g; //testujące wyrażenie regularne

    if (!reg.test(val2)) {
        alert("Co to za dziwne imię?...")
        this.select(); //zaznaczamy treść pola
    } else {
        alert('Twój imię to: ' + val2[0].toUpperCase() + val2.slice(1) )
    }
});
*/