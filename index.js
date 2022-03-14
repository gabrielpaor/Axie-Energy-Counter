let round = 1;
let energy = 3;

function roundUp() {
    round++;
    document.getElementById("roundCount").innerHTML = round;
    if (energy < 10){
        energy += 2;
        if (energy > 10) {
            energy--;
        }
        document.getElementById("energyCount").innerHTML = energy;
    }
}

function roundDown() {
    round--;
    document.getElementById("roundCount").innerHTML = round;
    if (energy >= 0){
        energy -= 2;
        document.getElementById("energyCount").innerHTML = energy;
    }
}

function energyUp() {
    if (energy < 10){
        energy++;
        document.getElementById("energyCount").innerHTML = energy;
    }
}

function energyDown() {
    if (energy > 0){
        energy--;
        document.getElementById("energyCount").innerHTML = energy;
    }
}

function pass() {
    round++;
    document.getElementById("roundCount").innerHTML = round;
    if (energy < 10){
        energy += 2;
        if (energy > 10) {
            energy--;
        }
        document.getElementById("energyCount").innerHTML = energy;
    }
}

function reset() {
    document.getElementById("roundCount").innerHTML = round = 1;
    document.getElementById("energyCount").innerHTML = energy = 3;
}