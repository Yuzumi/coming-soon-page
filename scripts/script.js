
const id            = (elementId) => document.getElementById(elementId);
const setContent    = (element, text) => element.innerHTML = text;

const delay         = 1000;

let timer = setInterval((() => {
    const demo          = id('timer');
    const countdownDate = new Date("Feb 3, 2019 15:37:25").getTime();

    return () => {
        let now         = new Date().getTime();
        let distance    = countdownDate - now;

        let days        = Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours       = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes     = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds     = Math.floor((distance % (1000 * 60)) / 1000),
            message     = `${days}d ${hours}h ${minutes}m ${seconds}s`

        setContent(demo, message);

        if (distance < 0) {
            clearInterval(timer);
            setContent(demo, 'EXPIRED');
        }
    };
})(), delay);