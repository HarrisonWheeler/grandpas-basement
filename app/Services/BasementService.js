import Basement from "../Models/Basement.js";
import _store from "../store.js";

console.log("hello from the service controller");
//Public
class BasementService {

  addMoney() {
    _store.addMoney()
  }
  addItem() {
    let newItem = new Basement()
    _store.addItem(newItem)
  }
}

const SERVICE = new BasementService();
export default SERVICE;
