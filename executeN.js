const SUM = (accumulator, currentValue) => accumulator + currentValue;


function getSum(array, element) {

    sum = array.reduce(function(accumulator, currentValue) {
        console.log(currentValue)
        console.log(accumulator)
        console.log(currentValue[element])
        return accumulator + parseInt(currentValue[element]);
    }, 0)
    return sum;
}

function statistics(executions, n) {

    mortes = getSum(executions, "morto");
    steps = getSum(executions, "steps")
    console.log("Total de mortes ", mortes);
    console.log("Média de mortes", mortes/n)
    console.log("Total de steps ", steps);
    console.log("Média de steps", steps/n)
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
            if(steps%5 == 0) {
                
            }
        }
        matrixes[i] = matrix;
        executions[i] = getData(matrix);
        executions[i]['steps'] = steps;
        await sleep(1000);
    }
        
    statistics(executions, n)
    
}