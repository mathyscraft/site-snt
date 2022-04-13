
const quote1 = document.getElementById("quote1");
quote1.hidden = false;

const quote2 = document.getElementById("quote2");
quote2.hidden = true;

document.getElementById("switch-btn").onclick = function() {
    quote1.hidden = !quote1.hidden
    quote2.hidden = !quote2.hidden
}

document.getElementById("switch-btn2").onclick = function() {
    quote1.hidden = !quote1.hidden
    quote2.hidden = !quote2.hidden
}