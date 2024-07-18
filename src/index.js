module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }

    const ones = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const ones2 = {
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
    };

    const tens = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let inc = 1;
    let array = {};
    while (number > 0) {
        array[inc] = (number % 10) * inc;
        inc *= 10;
        number = Math.trunc(number / 10);
    }

    let result = "";
    if (array.hasOwnProperty("100")) {
        result += ones[Math.trunc(array["100"] / 100)] + " hundred";
    }
    if (array.hasOwnProperty("10") && array["10"] !== 0) {
        if (array["10"] > 19 && array["10"] < 100) {
            result += " " + tens[array["10"]];
        } else {
            const temp = array["10"] + array["1"];
            result += " " + ones2[temp];
            return result.trim();
        }
    }
    if (array.hasOwnProperty("1") && array["1"] !== 0) {
        result += " " + ones[array["1"]];
    }
    return result.trim();
};
