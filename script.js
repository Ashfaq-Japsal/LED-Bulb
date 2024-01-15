function bulbOn() {
    var btn = document.getElementById(`on`).innerText
    if (btn == `ON`) {
        document.getElementById(`on`).innerText= `OFF`
        document.getElementById(`on`).style.color= `red`
        document.getElementById(`bulb-img`).src = `images/led on.jpg`
    }
    else {
        document.getElementById(`on`).innerText= `ON`
        document.getElementById(`on`).style.color= `seagreen`
        document.getElementById(`bulb-img`).src = `images/led off.jpg`
    }
}