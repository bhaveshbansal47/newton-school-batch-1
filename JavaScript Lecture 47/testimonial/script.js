const testimonials = document.getElementsByClassName('testimonial')
const playPauseButton = document.getElementsByClassName('play-pause')[0]

playPauseButton.addEventListener('click', startSlideShow)

let currentState = 'pause'
let testimonialActive = 0
let interval
function startSlideShow() {
    if (currentState === "pause") {
        playPauseButton.innerText = '⏸'
        currentState = 'play'
        interval = setInterval(function () {
            testimonials[testimonialActive].setAttribute('class', 'testimonial')
            if (testimonialActive === 2) {
                testimonialActive = 0
            } else {
                testimonialActive += 1
            }
            testimonials[testimonialActive].setAttribute('class', 'testimonial active')
        }, 1000)
    } else {
        playPauseButton.innerText = '▶'
        currentState = 'pause'
        clearInterval(interval)
    }

}