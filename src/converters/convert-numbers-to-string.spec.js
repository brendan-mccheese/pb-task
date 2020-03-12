import { convertNumberToString } from "./convert-numbers-to-string";

describe("convertNumbersToString", () => {
    // Test 0-20
    test.each`
        number | stringRep
        ${0}   | ${"zero"}
        ${1}   | ${"one"}
        ${2}   | ${"two"}
        ${3}   | ${"three"}
        ${4}   | ${"four"}
        ${5}   | ${"five"}
        ${6}   | ${"six"}
        ${7}   | ${"seven"}
        ${8}   | ${"eight"}
        ${9}   | ${"nine"}
        ${10}  | ${"ten"}
        ${11}  | ${"eleven"}
        ${12}  | ${"twelve"}
        ${13}  | ${"thirteen"}
        ${14}  | ${"fourteen"}
        ${15}  | ${"fifteen"}
        ${16}  | ${"sixteen"}
        ${17}  | ${"seventeen"}
        ${18}  | ${"eighteen"}
        ${19}  | ${"nineteen"}
        ${20}  | ${"twenty"}
    `("$number converts to string $stringRep", ({ number, stringRep }) => {
        expect(convertNumberToString(number)).toEqual(stringRep);
    });

    // Test twenties
    test.each`
        number | stringRep
        ${21}  | ${"twenty one"}
        ${22}  | ${"twenty two"}
        ${23}  | ${"twenty three"}
        ${24}  | ${"twenty four"}
        ${25}  | ${"twenty five"}
        ${26}  | ${"twenty six"}
        ${27}  | ${"twenty seven"}
        ${28}  | ${"twenty eight"}
        ${29}  | ${"twenty nine"}
    `("$number converts to string $stringRep", ({ number, stringRep }) => {
        expect(convertNumberToString(number)).toEqual(stringRep);
    });

    // Sample tests for > 29 < 100
    test.each`
        number | stringRep
        ${32}  | ${"thirty two"}
        ${43}  | ${"forty three"}
        ${54}  | ${"fifty four"}
        ${65}  | ${"sixty five"}
        ${76}  | ${"seventy six"}
        ${87}  | ${"eighty seven"}
        ${98}  | ${"ninety eight"}
    `("$number converts to string $stringRep", ({ number, stringRep }) => {
        expect(convertNumberToString(number)).toEqual(stringRep);
    });

    // Sample tests for > 100
    test.each`
        number | stringRep
        ${100} | ${"one hundred"}
        ${101} | ${"one hundred and one"}
        ${202} | ${"two hundred and two"}
        ${310} | ${"three hundred and ten"}
        ${420} | ${"four hundred and twenty"}
        ${566} | ${"five hundred and sixty six"}
        ${677} | ${"six hundred and seventy seven"}
        ${899} | ${"eight hundred and ninety nine"}
        ${911} | ${"nine hundred and eleven"}
    `("$number converts to string $stringRep", ({ number, stringRep }) => {
        expect(convertNumberToString(number)).toEqual(stringRep);
    });

    // Sample tests for > 1000
    test.each`
        number        | stringRep
        ${1000}       | ${"one thousand"}
        ${1001}       | ${"one thousand and one"}
        ${1000000}    | ${"one million"}
        ${1000203}    | ${"one million two hundred and three"}
        ${2222211188} | ${"two billion two hundred and twenty two million two hundred and eleven thousand one hundred and eighty eight"}
    `("$number converts to string $stringRep", ({ number, stringRep }) => {
        expect(convertNumberToString(number)).toEqual(stringRep);
    });

    const snapshotData = Array.from(Array(200000).keys());

    test("produces expected big sample of words", () => {
        const result = snapshotData.map(convertNumberToString);
        expect(result.join("\n")).toMatchSnapshot();
    });
});
