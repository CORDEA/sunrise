const strokeColor = 51;
const borderDiff = 10;

function setup() {
    createCanvas(640, 400);

    drawMountain();
    drawEvening();
    drawWind();

    for (let i = 0; i < 4; i++) {
        ellipse(height - 100, height - 100, 150 - i * 20, 150 - i * 20);
    }
}

function drawMountain() {
    push();
    translate(width, height - 140);
    rotate((2 * PI) / 5);
    noStroke();
    rect(0, 0, 110, height + 100);
    stroke(51);
    for (let i = 0; i < 11; i++) {
        line(i * 10, 0, i * 10, height + 100);
    }
    pop();
}

function drawWind() {
    push();
    translate(300, 0);
    noStroke();
    noFill();
    stroke(strokeColor);
    for (let i = 0; i < 18; i++) {
        arc(0, 0, 800 - (i * 20), 1150 - (i * 20), HALF_PI, PI);
    }
    pop();
}

function drawEvening() {
    const diff = 150;
    const loop = 9;
    const size = loop * borderDiff;
    for (let i = 0; i < 4; i++) {
        push();
        translate(0, height - (size + (diff * i)));
        noStroke();
        rect(0, 0, width, size);
        stroke(strokeColor);
        for (let j = 0; j < loop; j++) {
            const y = j * borderDiff;
            line(0, y, width, y);
        }
        pop();
    }
}

function draw() {
}