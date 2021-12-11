const express = require("express");
const axios = require("axios");
const { dummy } = require("./dummy");

const app = express();
const port = 4000;

app.get("/products", async (req, res) => {
  try {
    // todo uncomment const response = await axios.get(
    //   "https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6"
    // );
    // res.send(response.data);
    res.send(dummy);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error in server");
  }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
