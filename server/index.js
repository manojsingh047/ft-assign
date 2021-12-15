const express = require("express");
const axios = require("axios");
const { API_ENDPOINT } = require("./constants/endpoints");
const app = express();
const port = 4000;

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get(API_ENDPOINT);
    res.send(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error in server");
  }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
