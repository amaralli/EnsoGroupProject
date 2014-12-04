

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad () {
    var stateSelect = document.getElementById("state");
    Object.keys(usStates).forEach(function (element, index) {
        var stateOption = document.createElement("OPTION");
        stateOption.label = usStates[index].code;
        stateOption.value = usStates[index].name;
        stateSelect.appendChild(stateOption);
    });

    document.getElementById("noticesButton").addEventListener('click', onViewSelect(this));

    function onViewSelect() {

    }
}