import Purchase from "./Purchase";
import Lotto from "./Lotto";
import Bonus from "./Bonus";

class CreateModel {
  createPurchaseModel(amount) {
    return new Purchase(amount);
  }

  createLottoModel(winngNumbers) {
    return new Lotto(winngNumbers);
  }

  createBonusModel(bonusNumber, lottoWinngNumbers) {
    return new Bonus(bonusNumber, lottoWinngNumbers);
  }
}

export default CreateModel;
