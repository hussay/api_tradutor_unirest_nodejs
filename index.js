var unirest = require("unirest");
require('dotenv/config');

var req = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");

req.headers({
	"x-rapidapi-host": "google-translate1.p.rapidapi.com",
	"x-rapidapi-key": process.env.CHAVERAPIDAPI,
	"accept-encoding": "application/gzip",
	"content-type": "application/x-www-form-urlencoded",
	"useQueryString": true
});

req.form({
	"source": "pt",
	"q": "Instruções do Torneio",
	"target": "en"
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

    console.log(res.body);
    console.log(res.body.data.translations);
});