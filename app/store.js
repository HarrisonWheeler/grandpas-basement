import Basement from "./Models/Basement.js"



let _state = {
  // activeValue: new Value({ title: "Value" }),
  /** @type {Basement[]} */
  basement: [
    new Basement("", "Popsicle", "Grandpa Herberts famous summer treat!", 3, 2.00, "assets/popsicle.png")
  ],
  money: 0
};
console.log("hello from the basement store");

class Store {
  /**
   * Provides access to application state data
   */
  constructor() {


  }
  addMoney() {
    _state.money
    console.log(_state.money)
  }
  addItem(newItem) {
    _state.items
    _state.money
  }

  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
