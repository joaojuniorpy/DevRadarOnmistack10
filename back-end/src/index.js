const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect(`mongodb+srv://joaojuniorpy:P@$$W0rdpy@cluster0-1rsna.mongodb.net/week10retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3033);