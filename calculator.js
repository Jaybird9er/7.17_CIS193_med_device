// verifies that one button from each property is selected
function updateScore() {
	var property = document.getElementsByTagName("input");
    var propertyArry = [];
    var scopeStat;
    var baseConfidentiality;
    var baseIntegrity;
    var baseAvailability;
    var attackV;
    var attackC;
    var privilegeR;
    var userI;
    var finalValue;
    for (var i = 0; i < property.length; i++) {
        property[i].addEventListener('change', function() {
            // get the values of each radio button
            if (this.name === "AV" && this.checked) {
                propertyArry[0] = this.value;
                if (this.value === "AV_N")
                    attackV = 0.85;
                else if (this.value === "AV_A")
                    attackV = 0.62;
                else if (this.value === "AV_L")
                    attackV = 0.55;
                else if (this.value === "AV_P")
                    attackV = 0.2;
                }
            if (this.name === "AC" && this.checked) {
                propertyArry[1] = this.value;
                if (this.value === "AC_L")
                    attackC = 0.77;
                else if (this.value === "AC_H")
                    attackC = 0.44;
            }
            if (this.name === "PR" && this.checked) {
                propertyArry[2] = this.value;
                if (this.value === "PR_N")
                    privilegeR = 0.85;
                else if (this.value === "PR_L")
                    privilegeR = 0.62;
                else if (this.value === "PR_H")
                    privilegeR = 0.27;
            }
            if (this.name === "UI" && this.checked) {
                propertyArry[3] = this.value;
                if (this.value === "UI_N")
                    userI = 0.85;
                else if (this.value === "UI_R")
                    userI = 0.62;
            }
            if (this.name === "scope" && this.checked) {
                propertyArry[4] = this.value;
                if (this.value === "scope_U")
                    scopeStat = 1;
                else if (this.value === "scope_C")
                    scopeStat = 1.08;
            }
            if (this.name === "conf" && this.checked)
                propertyArry[5] = this.value;
            if (this.name === "integ" && this.checked)
                propertyArry[6] = this.value;
            if (this.name === "avail" && this.checked)
                propertyArry[7] = this.value;
            if (this.name === "health" && this.checked)
                propertyArry[8] = this.value;
            if (this.name === "sens" && this.checked)
                propertyArry[9] = this.value;
//            console.log(propertyArry.length);

            if (propertyArry.length === 10) {
                // eliminate warning message
                document.getElementById("warning").style.display = "none";
                
                /* compute the vulnerability score */

                // Sensitivity / Confidentiality
                    // row 1
                if (propertyArry[9] === "sens_N" && propertyArry[5] === "conf_N")
                    baseConfidentiality = 0.00;
                else if (propertyArry[9] === "sens_N" && propertyArry[5] === "conf_L")
                    baseConfidentiality = 0.22;
                else if (propertyArry[9] === "sens_N" && propertyArry[5] === "conf_H")
                    baseConfidentiality = 0.56;
                    // row 2
                else if (propertyArry[9] === "sens_L" && propertyArry[5] === "conf_N")
                    baseConfidentiality = 0.00;
                else if (propertyArry[9] === "sens_L" && propertyArry[5] === "conf_L")
                    baseConfidentiality = 0.65;
                else if (propertyArry[9] === "sens_L" && propertyArry[5] === "conf_H")
                    baseConfidentiality = 0.75;
                    // row 3
                else if (propertyArry[9] === "sens_H" && propertyArry[5] === "conf_N")
                    baseConfidentiality = 0.00;
                else if (propertyArry[9] === "sens_H" && propertyArry[5] === "conf_L")
                    baseConfidentiality = 0.85;
                else if (propertyArry[9] === "sens_H" && propertyArry[5] === "conf_H")
                    baseConfidentiality = 0.95;

                // Impact / Integrity
                    // row 1
                if (propertyArry[8] === "health_N" && propertyArry[6] === "integ_N")
                    baseIntegrity = 0.00;
                else if (propertyArry[8] === "health_N" && propertyArry[6] === "integ_L")
                    baseIntegrity = 0.22;
                else if (propertyArry[8] === "health_N" && propertyArry[6] === "integ_H")
                    baseIntegrity = 0.56;
                    // row 2
                else if (propertyArry[8] === "health_L" && propertyArry[6] === "integ_N")
                    baseIntegrity = 0.55;
                else if (propertyArry[8] === "health_L" && propertyArry[6] === "integ_L")
                    baseIntegrity = 0.60;
                else if (propertyArry[8] === "health_L" && propertyArry[6] === "integ_H")
                    baseIntegrity = 0.75;
                    // row 3
                else if (propertyArry[8] === "health_H" && propertyArry[6] === "integ_N")
                    baseIntegrity = 0.85;
                else if (propertyArry[8] === "health_H" && propertyArry[6] === "integ_L")
                    baseIntegrity = 0.90;
                else if (propertyArry[8] === "health_H" && propertyArry[6] === "integ_H")
                    baseIntegrity = 0.95;

                // Impact / Availability
                    // row 1
                if (propertyArry[8] === "health_N" && propertyArry[7] === "avail_N")
                    baseAvailability = 0.00;
                else if (propertyArry[8] === "health_N" && propertyArry[7] === "avail_L")
                    baseAvailability = 0.22;
                else if (propertyArry[8] === "health_N" && propertyArry[7] === "avail_H")
                    baseAvailability = 0.56;
                    // row 2
                else if (propertyArry[8] === "health_L" && propertyArry[7] === "avail_N")
                    baseAvailability = 0.55;
                else if (propertyArry[8] === "health_L" && propertyArry[7] === "avail_L")
                    baseAvailability = 0.60;
                else if (propertyArry[8] === "health_L" && propertyArry[7] === "avail_H")
                    baseAvailability = 0.65;
                    // row 3
                else if (propertyArry[8] === "health_H" && propertyArry[7] === "avail_N")
                    baseAvailability = 0.85;
                else if (propertyArry[8] === "health_H" && propertyArry[7] === "avail_L")
                    baseAvailability = 0.90;
                else if (propertyArry[8] === "health_H" && propertyArry[7] === "avail_H")
                    baseAvailability = 0.95;

                // final value
                var num1 = baseConfidentiality + baseIntegrity + baseAvailability;
                var num2 = attackV * attackC * privilegeR * userI;
                // console.log(baseConfidentiality)
                // console.log(baseIntegrity)
                // console.log(baseAvailability)
                // console.log(attackV)
                // console.log(attackC)
                // console.log(privilegeR)
                // console.log(userI)
                // console.log(scopeStat)
                finalValue = ((scopeStat) * ((3.326258289 * num1) + (1.1 * num2)));
                if (baseConfidentiality + baseAvailability +baseIntegrity === 0) {
                    finalValue = 0
                    document.getElementById("score").textContent = finalValue.toFixed(1);
                }
                else if (finalValue > 10) {
                    finalValue = 10;    
                    document.getElementById("score").textContent = finalValue.toFixed(1);
                }
                else
                document.getElementById("score").textContent = (Math.round(finalValue * 10) / 10).toFixed(1);
            }
        });
    }

}

updateScore();