import BasementController from "./Controllers/BasementController.js";

class App {
  valuesController = new BasementController();
}

window["app"] = new App();
