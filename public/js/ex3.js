function timeConverter() {
    let time = prompt("Please Enter Time");
    let result;
    while (isNaN(time) || time < 0 || time > 23) {
        alert("please enter valid time");
        time = prompt("Please Enter Time");
    } // time validation

    if (time == 0) {
        time = 12;
        result = time + "AM";
    } else if (time == 12) {
        result = time + "PM";
    } else if (time > 12) {
        time = time - 12;
        result = time + "PM";
    } else {
        result = time + "AM";
    }

    document.write(`<div> Time: ${result} </div>`);

} // end of time conv function


timeConverter();