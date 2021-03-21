
function getInformation() {
    obj = {
        "size": document.getElementById("size").value,
        "incubation": document.getElementById("incubation").value,
        "infected": document.getElementById("infected").value,
        "prob-neighbor": document.getElementById("prob-neighbor").value,
        "prob-die": document.getElementById("prob-die").value,
        "isolation": document.getElementById("isolation").checked,
        "mask": document.getElementById("mask").checked,
        "onemask": document.getElementById("onemask").value,
        "twomask": document.getElementById("twomask")
    }

    return obj;
}

function execute() {
    event.preventDefault()
    configuration = getInformation()
    console.log(configuration)

}

