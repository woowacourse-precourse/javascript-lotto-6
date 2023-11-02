import Utility from "./utils/utility.js";
class App {
  async play() {
    const util = new Utility();
    const purchaseQuantity = await util.getPurchaseQuantity();
    const myLottoArr = util.getLottoNumber(purchaseQuantity, 1, 45, 6);
    myLottoArr.map((lotto) => console.log(lotto));
  }
}

export default App;
