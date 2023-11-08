import {LottoView} from "../views/LottoView.js";
import Validation from "../models/Validation.js";

class LottoSettingController {
    // 입력 받은 로또 구입 금액 
    static async getLottoPurchaseAmount() {
        const lottoPurchasePrice = LottoView.getLottoPurchaseMoney();
        if(Validation.isPurchasePriceValidate(lottoPurchasePrice)){
            return Number(lottoPurchasePrice);
        }
    }
}
export default LottoSettingController;