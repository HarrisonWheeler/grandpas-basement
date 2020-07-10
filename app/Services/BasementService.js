import Basement from "../Models/Basement.js";
import _store from "../store.js";

console.log("hello from the service controller");
//Public
class BasementService {
  addItem() {
    let newItem = new Basement()
    _store.addItem(newItem)
    let index = _store.State.basement.find(item => item.id)
    index.quantity--
    _store.State.money -= index.price


  }

  addMoney() {
    _store.State.money += 10
    _store.addMoney()

  }
  addCart(itemId) {
    let index = _store.State.basement.find(item => item.id == itemId)
    document.getElementById("shoppingCart").innerHTML += index.Template
    _store.State.cart++
    _store.addCart(itemId)
  }

}


const SERVICE = new BasementService();
export default SERVICE;
