// BMI Javascript Logic
"use strict";
$(function () {
    // Input validation
    // Prevents submission
    // If form invalid, return
    $('#standardFill').validate()
    $('#standardFill').submit(function (e) {
        e.preventDefault();
        if (!$('#standardFill').valid()) return;
        // If strings, apply isNaN
        function calcImperialBMIFeetAndInches(heightInFeet, heightInInches, weightInPounds) {
            heightInFeet = Number(heightInFeet);
            heightInInches = Number(heightInInches);
            weightInPounds = Number(weightInPounds);
            if (isNaN(heightInFeet) || isNaN(heightInInches) || isNaN(weightInPounds)) {
                console.log("calcImperialBMIFeetAndInches - expects all inputs valid numbers");
                throw "calcImperialBMIFeetAndInches - expects all inputs valid numbers";
            }
            var height = (heightInFeet * 12) + heightInInches;
            return calcImperialBMI(height, weightInPounds);
        }
        // If strings, apply is NaN
        function calcImperialBMI(heightInInches, weightInPounds) {
            heightInInches = Number(heightInInches);
            weightInPounds = Number(weightInPounds);
            if (isNaN(heightInInches) || isNaN(weightInPounds)) {
                console.log("calcImperialBMI - expects all inputs valid numbers");
                throw "calcMetricImperialBMI - expects all inputs valid numbers";
                var BMI;
                BMI = (weightInPounds * 703) / (heightInInches * heightInInches);
                return BMI;
            }
        }
        // Display input
        var myForm = document.getElementById("standardFill");
        var n1 = document.getElementById("weightInPounds").value;
        var n2 = document.getElementById("heightInInches").value;
        var n3 = document.getElementById("heightInFeet").value;
        document.getElementById("BMIImperial").innerHTML = (n1 * 703) / (n3 * 12 + +n2) ** 2;
        return false;
    });
    // Validation
    // Prevents submission 
    // If form invalid, return
    $('#metricFill').validate()
    $('#metricFill').submit(function () {
        event.preventDefault();
        if (!$('#metricFill').valid()) return;

        function calcMetricBMICMandMM(heightInCentimeters, heightInMillimeters, weightInKilos) {
            // If string, apply isNaN
            heightInCentimeters = Number(heightInCentimeters);
            heightInMillimeters = Number(heightInMillimeters);
            weightInKilos = Number(weightInKilos);
            if (isNaN(heightInCentimeters) || isNaN(heightInMillimeters) || isNaN(weightInKilos)) {
                console.log("calcMetricBMICMandMM - expects all inputs valid numbers");
                throw "calcMetricBMICMandMM - expects all inputs valid numbers";
            }
            var combinedHeight = (heightInCentimeters) + (heightInMillimeters / 10);
            return calcMetricBMI(combinedHeight, weightInKilos);
        }

        function calcMetricBMI(heightInCentimeters, weightInKilos) {
            // If string, apply isNaN
            heightInCentimeters = Number(heightInCentimeters);
            weightInKilos = Number(weightInKilos);
            if (isNaN(heightInCentimeters) || isNaN(weightInKilos)) {
                console.log("calcMetricBMI - expects all inputs valid numbers");
                throw "expects all inputs valid numbers";
            }
            var BMI;
            var heightInMeters = heightInCentimeters / 100;
            BMI = (weightInKilos) / (heightInMeters * heightInMeters);
            return BMI;
        }
        var myForm2 = document.getElementById("metricFill");
        var j1 = document.getElementById("heightInCentimeters").value;
        var j2 = document.getElementById("weightInKilos").value;
        document.getElementById("BMIMetric").innerHTML = j2 / (j1 / 100) ** 2;
        return false;
    });
    // Dialog box, tabs, etc visual elements          
    $("#tabs").tabs();
    // Calculator
    $("#calculator").dialog({
        draggable: false,
        width: 600
    });
});
