const SUM = (accumulator, currentValue) => accumulator + currentValue;


function getSum(array, element) {

    sum = array.reduce(function(accumulator, currentValue) {
        return accumulator + parseInt(currentValue[element]);
    }, 0)
    return sum;
}

function statistics(executions, n) {

    mortes = getSum(executions, "morto");
    steps = getSum(executions, "steps")
    infectado = getSum(executions, "infectado")
    encubado = getSum(executions, "encubado")
    suscetivel = getSum(executions, "suscetivel")
    recuperado  = getSum(executions, "recuperado")
    
    console.log("Média de mortes", mortes/n)
    console.log("Média de steps", steps/n)
    console.log("Média de infectado", infectado/n)
    console.log("Média de encubado", encubado/n)
    console.log("Média de suscetivel", suscetivel/n)
    console.log("Média de recuperado", recuperado/n)
}

async function executeSteps(configuration) {
    let executions = []
    let matrixes = []

    let n = configuration.n
    for(i=0; i < n; i++) {
        let matrix = createStartMatrix(configuration.size)
        let daysMatrix = createStartMatrix(configuration.size)
        let steps = 0

        while(!isFinish(matrix)) {
            steps++
            result = step(matrix, daysMatrix, configuration)
            matrix = result[0]
            daysMatrix = result[1]
            if(steps == 419) {
                break;
            }
        }
        executions[i] = getData(matrix);
        executions[i]['steps'] = steps;
        console.log(i + " - " + steps)
    }

    statistics(executions, n)
}