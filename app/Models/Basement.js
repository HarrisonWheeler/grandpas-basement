import { generateId } from '../utilities.js'

export default class Basement {
    constructor(id, item, description, quantity, price, img) {
        this.id = id || generateId()
        this.item = item
        this.description = description
        this.quantity = quantity
        this.price = price
        this.img = img
    }


    get Template() {
        let template = /*html*/ `
        <div class="col-12 col-md-3 px-0 d-flex justify-content-center">
        <div class="card bg-color m-3" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top size img-fluid" alt="popsicle">
        <div class="card-body text-center bg-white">
        <h5 class="card-title">${this.item}</h5>
        <p class="card-text">${this.description}</p>
        <p>Qty: ${this.quantity}</p>
        <p>Price: ${this.price}</p>
        <button class="btn btn-primary btn-block" onclick="app.basementController.addCart('${this.id}')">ADD TO CART</button>
        </div>
        </div>
        </div>
        `

        return template

    }
}
