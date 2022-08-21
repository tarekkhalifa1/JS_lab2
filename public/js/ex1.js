function userAgeStatus() {
    let age = Number(prompt("Please Enter Your Age"));
    while (isNaN(age) || age <= 0) {
        alert("Please enter valid age");
        age = Number(prompt("Please Enter Your Age"));
    } //end of age validation

    let status;
    if (age >= 1 && age < 11) {
        status = "Child";
    }

    if (age >= 11 && age < 19) {
        status = "Teenager";
    }

    if (age >= 19 && age < 51) {
        status = "Grown";
    }

    if (age > 50) {
        status = "Old ";
    }

    document.write(`<div> type of age: ${status} </div>`)
} // end of user age status function 

userAgeStatus();