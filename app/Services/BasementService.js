import Basement from "../Models/Basement.js";
import _store from "../store.js";

console.log("hello from the service controller");
//Public
class BasementService {

  addMoney() {
    _store.State.money += 10
    _store.addMoney()

  }
  addItem(itemId) {
    let newItem = new Basement()
    _store.addItem(newItem)
    let index = _store.State.basement.find(item => item.id == itemId)
    index.quantity--
    _store.State.money -= index.price
  }

}


const SERVICE = new BasementService();
export default SERVICE;
