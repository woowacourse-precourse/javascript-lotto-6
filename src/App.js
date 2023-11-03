import Controller from "./Controller.js";

class App {
    async play() {
        const a = Controller.lottoNumToArray("1,2,am,  3, 4,5");
        console.log(a);
    }
}

export default App;
