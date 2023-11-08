import Lotto from "../Lotto";
import inputBonusNumberValidation from "../error-check/inputBonusNumberCheck";
import userInputAllCheck from "../error-check/userInputCheck";
import InputView from "../view/InputView"

const inputValid = {
    async validLottoAmount() {
        const getLottoAmount = await InputView.readLottoAmount();
        userInputAllCheck(getLottoAmount);
        return getLottoAmount;
    },

    async validLottoNumbers() {
        const getLottoNumbers = await InputView.readLottoNumbers();
        const checkLottoNumbers = new Lotto(getLottoNumbers);
        return checkLottoNumbers.getNumber();
    },

    async validBonusNumber(lottoNumber) {
        const getBonusNumber = await InputView.readBonusNumber();
        inputBonusNumberValidation(getBonusNumber, lottoNumber);
        return getBonusNumber;
    }
}

export default inputValid;