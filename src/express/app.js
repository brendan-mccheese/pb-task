import { convertNumberToString } from "../converters/convert-numbers-to-string";
import express from "express";
export const app = express();

/**
 * Route for converting a number to a string. Requires number param in query string.
 * NOTE: Would add open-api docs
 */
app.get("/convert-number", (req, res) => {
    let numberToConvert = req.query["number"];
    if (numberToConvert == null) {
        res.status(400);
        return res.json({ error: "please provide number parameter" });
    }
    const num = Number(numberToConvert);
    if (isNaN(num)) {
        res.status(400);
        return res.json({ error: `'${numberToConvert}' is not a valid number` });
    }
    try {
        const result = convertNumberToString(num);
        return res.json({ result });
    } catch (err) {
        console.log(err);
        res.status(400);
        return res.json({ error: err.message });
    }
});
