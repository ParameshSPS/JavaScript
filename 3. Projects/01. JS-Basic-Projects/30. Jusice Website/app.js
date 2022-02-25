// Jusice Website

function navToggle() {
    let nav = document.querySelector('nav');

    let menu = document.querySelector('.menu i');

    nav.classList.toggle('toggle');

    menu.classList.toggle('fa-times');
}

function vidToggle() {
    var show = document.querySelector('.video-container');

    var video = document.querySelector('video');

    show.classList.toggle('toggleVid');

    video.currentTime = 0;

    video.pause();
}