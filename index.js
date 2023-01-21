const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())
app.use(require("./drinks.route"));

mongoose.connect("mongodb+srv://Aslan:1123@cluster0.w5uga6x.mongodb.net/coffeeHouse", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(3501, () => {
  console.log('Сервер запущен успешно')
})