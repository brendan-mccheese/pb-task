import { app } from "./express/app";

const port = 3000 || process.env["PORT"];

/**
 * Serve API.
 */
app.listen(port, () => {
    console.log(`Number converter listening on ${port}`);
});
