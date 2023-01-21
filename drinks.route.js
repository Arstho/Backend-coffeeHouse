const {Router} = require("express");
const router = Router();
const {drinkController} = require("./drinks.controller");

router.get("/drinks", drinkController.getAllDrinks);
router.get("/drinks/in-stock", drinkController.getDrinksInStock);
router.get("/drinks/:id", drinkController.getInfoAboutDrink);
router.post("/drinks", drinkController.addDrink);
router.delete("/drinks/:id", drinkController.deleteDrink);
router.patch("/drinks/:id", drinkController.patchDrink);

module.exports = router;