import Controller from "./Controller.js";

class App {
    async play() {
        let a = Controller.priceToAmount(5000);
        console.log(a);
    }
}

export default App;
