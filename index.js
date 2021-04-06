
function getInformation() {
    obj = {
        "size": document.getElementById("size").value,
        "incubation": parseInt(document.getElementById("incubation").value),
        "infected": parseInt(document.getElementById("infected").value),
        "prob-neighbor": document.getElementById("prob-neighbor").value,
        "prob-die": document.getElementById("prob-die").value,
        "isolation": document.getElementById("isolation").checked,
        "mask": document.getElementById("mask").checked,
        "onemask": document.getElementById("onemask").value,
        "twomask": document.getElementById("twomask").value
    }

    return obj;
}

function createScreen() {
    console.log("create scrim")
    divCanvas = document.getElementById("canvas")
    canvas = document.createElement("canvas")
    canvas.width=500
    canvas.height=500
    canvas.id="screen"
    divCanvas.appendChild(canvas)
    br = document.createElement("br")
    divCanvas.appendChild(br)
    inputRange = document.createElement("input")
    inputRange.id="speed"
    inputRange.type="range"
    inputRange.min = 1
    inputRange.max = 200
    divCanvas.appendChild(inputRange)
}

function execute() {
    event.preventDefault()
    configuration = getInformation()
    console.log("config", configuration)
    screen = document.getElementById("screen");
    if(screen == null) {
        createScreen()
    }

    initSteps(configuration)
}

