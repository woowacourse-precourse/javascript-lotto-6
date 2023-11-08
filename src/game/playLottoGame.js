import { LOTTO_RESULT_CHECK } from "../constant/winning";
import { includedBonusNumber, includedLottoNumbers } from "./checkBonusNumber";
import printLottoResult from "./printLottoResult";

const playLottoGame = (inputNumber, lottoArray, bonusNumber, userBuyMoney) => {
    const checkLottoResult = LOTTO_RESULT_CHECK;

    lottoArray.forEach((numbers) => {
        const lottoCount = includedLottoNumbers(inputNumber, numbers);
        const getBonusNumber = includedBonusNumber(numbers, bonusNumber);

        compareLottoCount(checkLottoResult, lottoCount, getBonusNumber);
    });

    printLottoResult(checkLottoResult, userBuyMoney);
}

const compareLottoCount = (checkLottoResult, lottoCount, bonusNumber) => {
    switch (lottoCount) {
        case 3:
            checkLottoResult.three.count += 1;
            break;
        case 4:
            checkLottoResult.four.count += 1;
            break;
        case 5:
            checkLottoResult.five.count += 1;
            if (bonusNumber) checkLottoResult.fiveBonus.count += 1;
            break;
        case 6:
            checkLottoResult.six.count += 1;
            break;
    }
}

export default playLottoGame;