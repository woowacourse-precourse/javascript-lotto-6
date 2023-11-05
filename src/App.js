import Input from "./utils/Input.js";
class App {  
  async play() {    
    const purchaseAmount = await Input.getPurchaseAmount();  
  }    
}

export default App;
