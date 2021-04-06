const numbersMeaning = {
    0: "suscetivel",
    1: "encubado",
    2: "infectado",
    3: "morto",
    4: "recuperado",
    9: "recen-infectado"
}

function getRandomArbitrary(min=1, max=100) {
    return Math.random() * (max - min) + min;
}

function createStartMatrix(size) {
    var matrix = []
    for(var i=0; i<size; i++) {
        matrix[i] = []
        for(var j=0; j<size; j++) {
            matrix[i][j] = 0
        }
    }
    first = parseInt(size/2)
    matrix[first][first] = 1
    return matrix
}

function isFinish(matrix) {
    for(var i=0; i<size; i++) {
        for(var j=0; j<size; j++) {
            if(matrix[i][j] == 1 || matrix[i][j] == 2) {
                return false
            }
        }
    }

    return true
}

function infect(matrix, i, j, configuration) {
    if(matrix[i][j] == 0) {
        probabilityOfInfection = configuration['prob-neighbor']
        randomNumber = getRandomArbitrary(1, 100)
        if(randomNumber >= 100 - probabilityOfInfection) {
            matrix[i][j] = 9
        }
    }

    return matrix
}

function tryToInfect(matrix, i, j, configuration) {
    if(i != 0) {
        matrix = infect(matrix, i - 1, j, configuration)
    }
    if(i != matrix.length - 1) {
        matrix = infect(matrix, i + 1, j, configuration)
    }
    if(j != 0){
        matrix = infect(matrix, i, j - 1, configuration)
    }
    if(j != matrix.length - 1) {
        matrix = infect(matrix, i, j + 1, configuration)
    }

    return matrix
}

function step(matrix, days, configuration) {
    console.log(configuration)
    // passar a doença
    for(var i=0; i<size; i++) {
        for(var j=0; j<size; j++) {
            // Encubados
            if(matrix[i][j] == 1) {
                matrix = tryToInfect(matrix, i, j, configuration)
                if(days[i][j] == configuration.incubation) {
                    matrix[i][j] = 2
                    days[i][j] = 1
                }
                days[i][j]++
            }
            // Infectados se tiver isolamento ele nao passa adiante
            else if(matrix[i][j] == 2) {
                if(!configuration.isolation) {
                    matrix = tryToInfect(matrix, i, j, configuration)
                }
                
                if(days[i][j] == configuration.infected) {
                    matrix[i][j] = 4
                    days[i][j] = 1
                }
                days[i][j]++
            }
        }
    }
    // receber a doença
    for(var i=0; i<size; i++) {
        for(var j=0; j<size; j++) {
            // Encubados & Infectados
            if(matrix[i][j] == 9) {
                matrix[i][j] = 1
                days[i][j] = 1
            }
        }
    }
    return [matrix, days]
}