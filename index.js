let homeCount = document.getElementById("home")
let homeCounter = 0
let guestCount = document.getElementById("guest")
let guestCounter = 0

function addHomeOne() {
    homeCounter += 1
    homeCount.textContent = homeCounter
}

function addHomeTwo() {
    homeCounter += 2
    homeCount.textContent = homeCounter
}

function addHomeThree() {
    homeCounter += 3
    homeCount.textContent = homeCounter
}

function addGuestOne() {
    guestCounter += 1
    guestCount.textContent = guestCounter
}

function addGuestTwo() {
    guestCounter += 2
    guestCount.textContent = guestCounter
}

function addGuestThree() {
    guestCounter += 3
    guestCount.textContent = guestCounter
}