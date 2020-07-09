export default class Basement {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}
