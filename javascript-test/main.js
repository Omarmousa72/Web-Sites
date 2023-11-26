// Your Code Goes Here

//BMI Formula (weight / (height * height)) [weight should be in kilograms & height should be in meters]

// You should calculate BMI and if BMI < 18.6 should display `Under Weight: ${BMI}`
// Else If BMI >= 18.6 && BMI < 24.9 should display `Normal: ${BMI}`
// Else should display `Over Weight: ${BMI}`


const btn = document.getElementById("btn"),
    result = document.getElementById("result");
result.style.color = "white"

const calc = () => {
    let heightInCm = parseFloat(document.getElementById("height").value),
        heightInM = heightInCm / 100,
        weight = parseFloat(document.getElementById("weight").value),
        bmi = weight / (heightInM * heightInM);
    if ((isNaN(heightInCm) || isNaN(weight))) {
        alert("Enter weight and height!");
        return;
    }
    result.innerHTML = "";
    if (bmi < 18.5) {
        result.innerHTML += `Under Weight: ${bmi}`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML += `Normal: ${bmi}`;
    } else {
        result.innerHTML += `Over Weight: ${bmi}`;
    };

}

btn.onclick = calc;
