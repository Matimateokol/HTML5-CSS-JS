window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.hours');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360}deg)`;
    const minutes = document.querySelector('.minutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector('.seconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.ahours');
    hours.style.transform = `rotate(${date.getUTCHours() / 12 * 360}deg)`;
    const minutes = document.querySelector('.aminutes');
    minutes.style.transform = `rotate(${date.getUTCMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector('.aseconds');
    seconds.style.transform = `rotate(${date.getUTCSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.bhours');
    hours.style.transform = `rotate(${(date.getUTCHours()-5) / 12 * 360}deg)`;
    const minutes = document.querySelector('.bminutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector('.bseconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.chours');
    hours.style.transform = `rotate(${(date.getUTCHours()+3) / 12 * 360}deg)`;
    const minutes = document.querySelector('.cminutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector('.cseconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.dhours');
    hours.style.transform = `rotate(${(date.getUTCHours()+8) / 12 * 360}deg)`;
    const minutes = document.querySelector('.dminutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector('.dseconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);
