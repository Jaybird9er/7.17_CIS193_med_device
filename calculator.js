// verifies that one button from each property is selected
function updateScore() {
	var property = document.getElementsByTagName("input");
    var validArray = [];
    var propertyArry = [];
    for (var i = 0; i < property.length; i++) {
        property[i].addEventListener('change', function() {
            if (this.name === "AV" && this.checked)
                propertyArry[0] = this.value;
            if (this.name === "AC" && this.checked)
                propertyArry[1] = this.value;
            if (this.name === "PR" && this.checked)
                propertyArry[2] = this.value;
            if (this.name === "UI" && this.checked)
                propertyArry[3] = this.value;
            if (this.name === "scope" && this.checked)
                propertyArry[4] = this.value;
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
            console.log(propertyArry.length);
            if (propertyArry.length === 10)
                document.getElementById("warning").style.display = "none";
        });
    }

}

updateScore();