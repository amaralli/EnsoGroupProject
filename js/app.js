

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


// aboutenso employee table js
angular.module('AddressBook', [])
    .controller('AddressController', function($scope) {
        $scope.employees = ensoEmployees;
        $scope.sortCol = 'lastName';    
        $scope.sortBy = function(sortCol) {
            if( $scope.sortCol == sortCol) {
                $scope.sortReverse = !$scope.sortReverse;
            }else {
                $scope.sortCol = sortCol;
                $scope.sortReverse = false;
            }
            $scope.sortCol = sortCol;
        };
        $scope.isSortedBy = function(colName) {
            return colName ==$scope.sortCol;
        };
    });
