

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad () {

    document.getElementById("noticesButton").addEventListener('click', onViewSelect("Notices"));
    document.getElementById("eventsButton").addEventListener('click', onViewSelect("UpcomingEvents"));
    document.getElementById("bothViewButton").addEventListener('click', onViewSelect("Both"));


    function onViewSelect(displayName) {
        if(displayName != "Both") {
            console.log("1");
            var section = document.getElementById(displayName);
            section.style.display = 'block';
        } else {
            console.log("2");
            var section1 = document.getElementById("Notices");
            var section2 = document.getElementById("UpcomingEvents");
            section1.style.display = 'block';
            section2.style.display = 'block';
        }
    }
}