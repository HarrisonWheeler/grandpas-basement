import Basement from "./Models/Basement.js"



let _state = {
  // activeValue: new Value({ title: "Value" }),
  /** @type {Basement[]} */
  basement: [
    new Basement("", "Popsicle", "Grandpa Herberts famous summer treat!", 3, 2.00, "assets/popsicle.png"),
    new Basement("", "Grandpas Newspapers", "Grandpa Herberts famous summer treat!", 3, 10.00, "assets/newspaper.png"),
    new Basement("", "Grandpas Walker", "Grandpa Herberts famous summer treat!", 1, 100.00, "assets/walker.png"),
    new Basement("", "Save Chris", "Grandpa Herberts famous summer treat!", 1, 10000.00, "assets/chris.png")
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
