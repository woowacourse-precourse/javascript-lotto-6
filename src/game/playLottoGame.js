import { LOTTO_RESULT_CHECK } from "../constant/winning";
import { includedBonusNumber, includedLottoNumbers } from "./checkBonusNumber";
import printLottoResult from "./printLottoResult";

const playLottoGame = (inputNumber, lottoArray, bonusNumber, userBuyMoney) => {
    const checkLottoResult = LOTTO_RESULT_CHECK;

    lottoArray.forEach((numbers) => {
        const lottoCount = includedLottoNumbers(inputNumber, numbers);
        const bonusCheck = includedBonusNumber(numbers, bonusNumber);

        if (lottoCount === 3) { checkLottoResult.three.count += 1; }
        if (lottoCount === 4) { checkLottoResult.four.count += 1; }
        if (lottoCount === 5) { checkLottoResult.five.count += 1; }
        if (lottoCount === 5 && bonusCheck) { checkLottoResult.fiveBonus.count += 1; }
        if (lottoCount === 6) { checkLottoResult.six.count += 1; }
    });

    printLottoResult(checkLottoResult, userBuyMoney);
}

export default playLottoGame;