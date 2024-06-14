const express = require('express');
require('express-async-errors');
const { 
  gamersController, 
  gamersChallengesController, 
  certificationsController 
} = require('./controllers');
const { GamerCertification } = require('./models');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/gamers', gamersController.list);
app.get('/gamers/:id', gamersController.findById);
app.get('/gamers/:id/certifications', gamersController.getCertifications);
app.post('/gamers', gamersController.create);
app.patch('/gamers/:id', gamersController.update);
app.delete('/gamers/:id', gamersController.remove);
app.get('/challenges', gamersChallengesController.list);
app.get('/challenges/:id', gamersChallengesController.findById);
app.get('/certifications/:id', certificationsController.findById);
app.get('/certifications/:id/gamers', certificationsController.getGamers);

app.get('/gamers_certifications', async (req, res) => {
  const list = await GamerCertification.findAll();
  res.status(200).json(list);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json('Erro interno do servidor');
});

module.exports = app;