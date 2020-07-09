import Basement from "./Models/Basement.js"

let _state = {
  // activeValue: new Value({ title: "Value" }),
  /** @type {Basement[]} */
  basement: []
};
console.log("hello from the basement store");

class Store {
  /**
   * Provides access to application state data
   */
  addItem(newItem) {
    _state.items.push(newItem)
  }

  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
