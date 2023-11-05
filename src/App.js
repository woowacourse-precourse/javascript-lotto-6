import Input from "./utils/Input.js";
import Lottos from "./Lottos.js";

class App {  
  async play() {    
    const purchaseAmount = await Input.getPurchaseAmount();
    const ticketCount = purchaseAmount / 1000;
    const lottos = new Lottos(ticketCount);
  }    
}

export default App;
