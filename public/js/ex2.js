function vowelsCount() {
    var string = prompt("Please Enter String");
    var vowels = ["a", "e", "o", "u", "i", "A", "E", "O", "U", "I"];
    var count = 0;
    for (let s in string) {
        for (let v of vowels) {
            if (string[s] == v) {
                count++
            }
        } // loop on vowels 

    } // loop on string

    return document.write(`<div>Number of vowels in string: ${count}</div>`);
} // end of string Vowels Count


vowelsCount();