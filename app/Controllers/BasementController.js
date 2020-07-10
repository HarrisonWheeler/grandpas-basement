import _basementService from "../Services/BasementService.js";
import _store from "../store.js"


//Public

function _draw() {
  let template = ""
  let items = _store.State.basement
  items.forEach(item => template += item.Template)
  document.getElementById("itemCard").innerHTML = template
  // @ts-ignore
  document.getElementById("balance").innerHTML = _store.State.money
}
export default class BasementController {
  constructor() {
    _draw()
    console.log("hello from the basement controller");

  }

  addMoney() {
    _basementService.addMoney()
    // @ts-ignore
    _draw()
  }

  addCart(itemId) {
    // debugger
    console.log("button worked");
    _basementService.addCart(itemId)
    _draw()
  }

  addItem(itemId) {
    _basementService.addItem()
    _draw()
  }
}
