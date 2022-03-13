let round = 1;
let energy = 3;

function roundUp() {
    round++;
    document.getElementById("roundCount").innerHTML = round;
}

function roundDown() {
    round--;
    document.getElementById("roundCount").innerHTML = round;
}

function energyUp() {
    energy++;
    document.getElementById("energyCount").innerHTML = energy;
}

function energyDown() {
    energy--;
    document.getElementById("energyCount").innerHTML = energy;
}

function pass() {
    round++;
    energy += 2;
    document.getElementById("roundCount").innerHTML = round;
    document.getElementById("energyCount").innerHTML = energy;
}

function reset() {
    document.getElementById("roundCount").innerHTML = round = 1;
    document.getElementById("energyCount").innerHTML = energy = 3;
}