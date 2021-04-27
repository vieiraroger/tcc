
function getInformation() {
    obj = {
        "size": document.getElementById("size").value,
        "incubation": parseInt(document.getElementById("incubation").value),
        "infected": parseInt(document.getElementById("infected").value),
        "prob-neighbor": document.getElementById("prob-neighbor").value,
        "prob-die": document.getElementById("prob-die").value,
        "isolation": document.getElementById("isolation").checked,
        "mask": document.getElementById("mask").checked,
        "onemask": document.getElementById("onemask").value
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
    spamIteracao = document.createElement("p")
    spamIteracao.id = 'iteracao'
    spamSuscetivel = document.createElement("p")
    spamSuscetivel.id = 'suscetivel'
    spamEncubado = document.createElement("p")
    spamEncubado.id = 'encubado'
    spamInfectado = document.createElement("p")
    spamInfectado.id = 'infectado'
    spamMorto = document.createElement("p")
    spamMorto.id = 'morto'
    spamRecuperado = document.createElement("p")
    spamRecuperado.id = 'recuperado'
    divCanvas.appendChild(spamIteracao)
    divCanvas.appendChild(spamSuscetivel)
    divCanvas.appendChild(spamEncubado)
    divCanvas.appendChild(spamInfectado)
    divCanvas.appendChild(spamMorto)
    divCanvas.appendChild(spamRecuperado)

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

