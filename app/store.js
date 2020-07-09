import Basement from "./Models/Basement.js"



let _state = {
  // activeValue: new Value({ title: "Value" }),
  /** @type {Basement[]} */
  basement: [
    new Basement("Popsicle", "Grandpa Herberts famous summer treat!", 3, 2.00, "assets/popsicle.png")
  ]
};
console.log("hello from the basement store");

class Store {
  /**
   * Provides access to application state data
   */
  constructor() {
    this.money = 0

  }
  addMoney() {
    this.money += 10
    console.log(this.money)
  }
  addItem(newItem) {
    _state.items.push(newItem)
  }

  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
