const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector('.second')

function updateClock() {
    const currentDate = new Date()
    setTimeout(updateClock, 1000)
    const hour = currentDate.getHours()
    const minute = currentDate.getMinutes()
    const second = currentDate.getSeconds()
    const hourDeg = (hour / 12 ) * 360
    hourHand.style.transform =  `rotate(${hourDeg}deg)`
    const minuteDeg = (minute / 60 ) * 360
    minuteHand.style.transform =  `rotate(${minuteDeg}deg)`
    const secondDeg = (second / 60 ) * 360
    secondHand.style.transform =  `rotate(${secondDeg}deg)`
}

setInterval(updateClock,1000)