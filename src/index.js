module.exports = function toReadable(number) {
    if (number === 0) return "zero";

    let words = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };

    let strWord = number.toString();
    let result = "";
    let hundreds = "";

    if (strWord.length === 3) {
        hundreds = words[strWord[0]] + " hundred";
        strWord = strWord.slice(1);
    }

    if (words[strWord]) {
        result = hundreds + " " + words[strWord];
    } else {
        if (strWord == "00") {
            return hundreds;
        }

        let dec = words[strWord[0]] ? words[strWord[0] * 10] : "";
        let one = words[strWord[1]];
        result =
            dec != "" ? hundreds + " " + dec + " " + one : hundreds + " " + one;
    }
    return result.trim();
};
