const Drink = require("./Drink.model");

module.exports.drinkController = {
  getAllDrinks: (req, res) => {
    Drink.find({}, {name: true, price: true})
    .then((drinks) => {
      res.json(drinks)
    });
  },

  getDrinksInStock: (req, res) => {
    Drink.find({
      inStock: true
    })
    .then((drinks) => {
      res.json(drinks)
    })
    .catch(err => {
      res.json("Ошибка!!!")
    });
  },

  getInfoAboutDrink: (req, res) => {
    Drink.findById(req.params.id)
    .then((drinks) => {
      res.json(drinks)
    })
    .catch(err => {
      res.json("Ошибка!!!")
    });
  },

  deleteDrink: (req, res) => {
    Drink.findByIdAndDelete(req.params.id).then((drinks) => {
      res.json("Напиток удален")
    });
  },

  addDrink: (req, res) => {
    Drink.create({
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      containCaffeine: req.body.containCaffeine,
      volume: req.body.volume,
      drinkDescription: req.body.drinkDescription
    })
    .then((drinks) => {
      res.json(drinks)
    })
    .catch(err => {
      res.json("error: Ошибка при добавлении нового напитка")
    });;
  },

  patchDrink: (req, res) => {
    Drink.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      containCaffeine: req.body.containCaffeine,
      volume: req.body.volume,
      drinkDescription: req.body.drinkDescription
    })
    .then((drinks) => {
      res.json(drinks)
    })
    .catch(err => {
      res.json("Ошибка!!!")
    });
  }
};