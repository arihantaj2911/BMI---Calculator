function calculateBMI() {
    let weight = document.getElementById("weight").value;
    const weightUnit = document.getElementById("weight-unit").value;
    let height = document.getElementById("height").value;
    const heightUnit = document.getElementById("height-unit").value;
    let bmi;
  
    if (weightUnit === "lb") {
      weight = weight * 0.453592;
    }
  
    if (heightUnit === "ft") {
      height = height * 0.3048;
    } else if (heightUnit === "cm") {
      height = height / 100;
    }
  
    bmi = weight / (height * height);
  
    document.getElementById("bmi-value").innerHTML = bmi.toFixed(2);
  
    if (bmi < 18.5) {
      document.getElementById("bmi-message").innerHTML
    } else if (bmi >= 18.5 && bmi <= 24.9) {
document.getElementById("bmi-message").innerHTML = "Your weight is normal.";
} else if (bmi >= 25 && bmi <= 29.9) {
document.getElementById("bmi-message").innerHTML = "You are overweight.";
} else {
document.getElementById("bmi-message").innerHTML = "You are obese.";
}
}
