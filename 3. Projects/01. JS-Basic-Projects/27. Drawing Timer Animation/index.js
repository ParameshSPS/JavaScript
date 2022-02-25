// Timer Design Animation

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log('Timer is Started');
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter
        );
    },
    onComplete() {
        console.log('Timer is Completed');
    }
});

// Formule

/*
offset = (perimeter * timeRemaining) / titalDuration - perimeter

offsetAtStart = p * 30 / 30 - p

offsetAtEnd = p * 0 / 30 - p
*/