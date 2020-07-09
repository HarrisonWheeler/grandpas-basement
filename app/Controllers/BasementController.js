import _basementService from "../Services/BasementService.js";
import _store from "../store.js"

//Public
export default class BasementController {
  constructor() {



    console.log("hello from the basement controller");

  }
  addItem() {
    // debugger
    console.log("button worked");
    _basementService.addItem()
  }
}
