import Purchase from "./Purchase";
import Lotto from "./Lotto";

class CreateModel {
  createPurchaseModel(amount) {
    return new Purchase(amount);
  }

  createLottoModel(winngNumbers) {
    return new Lotto(winngNumbers);
  }
}

export default CreateModel;
