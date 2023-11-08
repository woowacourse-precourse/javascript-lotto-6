import LottoView from "../views/LottoView.js";
import Validation from "../models/Validation.js";
import { CONSTANTS } from "../constants/GameConstant.js";
import UserLotto from "../models/UserLotto.js";

class LottoSettingController {
    static async setLottoPurchasePrice() {
        const lottoPurchasePrice = await LottoView.getLottoPurchasePrice();
        if(Validation.isPurchasePriceValidate(lottoPurchasePrice)){
            return Number(lottoPurchasePrice);
        }
    }

    static calculateLottoPurchaseCount(lottoPurchasePrice){
        return lottoPurchasePrice / Number(CONSTANTS.PURCHASE_UNIT_PRICE);
    }

    static printPurchaseLottoCount(lottoPurchaseCount){
        LottoView.printPurchaseLottoCount(lottoPurchaseCount);
    }

    static async setUserLotto(){
        const lottoPurchasePrice = await this.setLottoPurchasePrice();
        const lottoPurchaseCount = this.calculateLottoPurchaseCount(lottoPurchasePrice);
        this.printPurchaseLottoCount(lottoPurchaseCount);

        const userLotto = new UserLotto(lottoPurchaseCount);
        userLotto.printLottoNumbers();
        
        return userLotto;
    }
}
export default LottoSettingController;