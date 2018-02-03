
const delay = 1000;

const id = (elementId) => document.getElementById(elementId);

let countdownDate = new Date('Feb 3, 2019 17:01:27').getTime();

let timer = setInterval(() => {
    let now         = new Date().getTime();
    let distance    = countdownDate - now;
    let demo        = id('timer');

    let days        = Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours       = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes     = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds     = Math.floor((distance % (1000 * 60)) / 1000);

    demo.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timer);
        demo.innerHTML = 'EXPIRED';
    }
}, delay);