const colors = {
    0: "#FFFFFF",
    1: "#FF6663",
    2: "#A30000",
    3: "#0B0500",
    4: "#81B29A"
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateTexts(steps, data) {
    iteracao = document.getElementById("iteracao")
    iteracao.innerHTML = "Iterações: " + steps;
    entries = Object.entries(data)
    for(var i=0;i<entries.length; i++) {
        entrie = entries[i];
        htmlObj = document.getElementById(entrie[0])
        htmlObj.innerHTML = entrie[0] + ": " + entrie[1] 
    }

}

async function initSteps(configuration) {
    results = []
    screen = document.getElementById("screen")
    matrix = createStartMatrix(configuration.size)
    daysMatrix = createStartMatrix(configuration.size)
    context = screen.getContext("2d")
    context.globalAlpha = 1;
    context.clearRect(0, 0, screen.width, screen.height);
    drawMatrix(context, matrix, 500/configuration.size)
    speed = document.getElementById("speed")
    await sleep(speed.value * 10);
    steps = 0
    while(!isFinish(matrix)) {
        steps++
        result = step(matrix, daysMatrix, configuration)
        matrix = result[0]
        daysMatrix = result[1]
        results[steps] = data = getData(matrix)
        drawMatrix(context, matrix, 500/configuration.size)
        updateTexts(steps, results[steps])
        speed = document.getElementById("speed")
        await sleep(speed.value * 10);
    }

}



function drawMatrix(context, matrix, elementSize) {
    size = matrix.length
    for(var i=0; i<size; i++) {
        for(var j=0; j<size; j++) {
            context.beginPath();
            context.fillStyle = colors[matrix[i][j]];
            context.fillRect(i*elementSize, j*elementSize, i*elementSize + elementSize, i*elementSize + elementSize);
            context.strokeRect(i*elementSize, j*elementSize, i*elementSize + elementSize, i*elementSize + elementSize);
        }
    }
    
}