const LESS_THAN_TWENTY = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
const MULTIPLES_OF_TEN = [null, "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const BIGGIES = ["hundred", "thousand", "million", "billion"];

/**
 * Convert a number into a word string e.g. five thousand and sixty.
 * @param number The number to convert.
 * @returns {string} The resulting number string.
 */
export const convertNumberToString = number => buildNumberString(number);

/**
 * Build up a number string by recursively breaking down the starting number into word chunks.
 * @param number - The number to convert.
 * @param words - The words built up during the process
 * @returns {string} - The converted number string e.g. one hundred and twenty thousand.
 */
const buildNumberString = (number, words = []) => {
    if (number == null) {
        throw new Error("number is a required parameter");
    }
    if (number > 1e12) {
        throw new Error("number to convert has to be less than one trillion");
    }
    let word = "";
    let remainder = 0; // Will hold the remaining chunks of number
    if (number < 20) {
        word = LESS_THAN_TWENTY[number];
    } else if (number < 100) {
        const pos = Math.floor(number / 10) - 1;
        const remainder = number % 10;
        if (remainder === 0) {
            word = MULTIPLES_OF_TEN[pos];
        } else {
            word = `${MULTIPLES_OF_TEN[pos]} ${LESS_THAN_TWENTY[remainder]}`;
        }
    } else if (number < 1e3) {
        // Handle hundreds
        remainder = number % 1e2;
        const remaining = Math.floor(number / 1e2);
        word = `${buildNumberString(remaining)} ${BIGGIES[0]}`;
    } else if (number < 1e6) {
        // Handle thousands
        remainder = number % 1e3;
        const remaining = Math.floor(number / 1e3);
        word = `${buildNumberString(remaining)} ${BIGGIES[1]}`;
    } else if (number < 1e9) {
        // Handle millions
        remainder = number % 1e6;
        const remaining = Math.floor(number / 1e6);
        word = `${buildNumberString(remaining)} ${BIGGIES[2]}`;
    } else if (number < 1e12) {
        // Handle billions
        remainder = number % 1e9;
        const remaining = Math.floor(number / 1e9);
        word = `${buildNumberString(remaining)} ${BIGGIES[3]}`;
    }
    words.push(word);
    if (remainder === 0) {
        // Insert 'and' into words, when more than word chunk is in the string
        // e.g. one hundred 'and' ten
        if (words.length > 1) {
            words.push(words[words.length - 1]);
            words[words.length - 2] = "and";
        }
        return words.join(" ");
    }
    // Process remaining
    return buildNumberString(remainder, words);
};
