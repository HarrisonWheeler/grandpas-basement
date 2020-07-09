import BasementController from "./Controllers/BasementController.js";

class App {
  basementController = new BasementController();
}

window["app"] = new App();
