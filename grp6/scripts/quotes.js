const quote1 = document.getElementById("quote1");
quote1.hidden = false;

const quote2 = document.getElementById("quote2");
quote2.hidden = true;

document.getElementById("switch-btn").onclick = quoteSwitch;
document.getElementById("switch-btn2").onclick = quoteSwitch;

function quoteSwitch() {
    quote1.hidden = !quote1.hidden;
    quote2.hidden = !quote2.hidden;
}