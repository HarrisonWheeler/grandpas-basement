import _basementService from "../Services/BasementService.js";
import _store from "../store.js"

//Public

function _draw() {
  let template = ""
  let items = _store.State.basement
  items.forEach(item => template += item.Template)
  document.getElementById("itemCard").innerHTML = template
}
export default class BasementController {
  constructor() {
    _draw()
    console.log("hello from the basement controller");

  }

  addMoney() {

  }

  addItem() {
    // debugger
    console.log("button worked");
    _basementService.addItem()
    _draw()
  }
}
