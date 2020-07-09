export default class Basement {
    constructor(data) {
        this.title = data.title
        console.log("hello from the basement model");

    }

    get Template() {
        return this.title
    }
}