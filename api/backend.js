const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())

let axios = require("axios").default;

let types = (type) => {
  return {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/' + type,
    headers: {
      'x-rapidapi-key': '5dbee0d520mshda247591d161b4ap12c278jsn6924d09fa87a',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
};

app.get('/types/:type', function (req, res) {
  const { type } = req.params
  const { pageSize } = req.query
  axios.request(types(type)).then(function (response) {
    let resp = response.data;
    resp = resp.splice(0, pageSize);
    console.log(resp.length)
    res.json(resp)

  }).catch(function (error) {
    console.error(error);
  });
});

let factions = (faction) => {
  return {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/' + faction,
    headers: {
      'x-rapidapi-key': '5dbee0d520mshda247591d161b4ap12c278jsn6924d09fa87a',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
};

app.get('/factions/:faction', function (req, res) {
  const { faction } = req.params
  const { pageSize } = req.query
    axios.request(factions(faction)).then(function (response) {
    let resp = response.data;
    resp = resp.splice(0, pageSize);
    console.log(resp.length)
    res.json(resp)

  }).catch(function (error) {
    console.error(error);
  });
});

let races = (race) => {
  return {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/' + race,
    headers: {
      'x-rapidapi-key': '5dbee0d520mshda247591d161b4ap12c278jsn6924d09fa87a',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
};

app.get('/races/:race', function (req, res) {
  const { race } = req.params
  const { pageSize } = req.query
    axios.request(races(race)).then(function (response) {
    let resp = response.data;
    resp = resp.splice(0, pageSize);
    console.log(resp.length)
    res.json(resp)

  }).catch(function (error) {
    console.error(error);
  });
});

let qualities = (qualitie) => {
  return {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/' + qualitie,
    headers: {
      'x-rapidapi-key': '5dbee0d520mshda247591d161b4ap12c278jsn6924d09fa87a',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
};

app.get('/qualities/:qualitie', function (req, res) {
  const {qualitie } = req.params
  const { pageSize } = req.query
    axios.request(qualities(qualitie)).then(function (response) {
    let resp = response.data;
    resp = resp.splice(0, pageSize);
    console.log(resp.length)
    res.json(resp)

  }).catch(function (error) {
    console.error(error);
  });
});

app.listen(3000, function () {
  console.log('Server is running! Run Bitch, Run')
});
