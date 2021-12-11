const express = require("express");
const axios = require("axios");

const app = express();
const port = 4000;

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6"
    );
    console.log({ response });
    // const headerDate = data.headers && data.headers.date ? data.headers.date : "no response date";
    // console.log("Status Code:", data.status);
    // console.log("Date in dataponse header:", headerDate);
    const users = response.data;
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error in server");
  }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
