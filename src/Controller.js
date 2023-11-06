import { CONSTANT } from "./Constant.js";
import { Random, Console } from "@woowacourse/mission-utils";

class Controller {
    //사용자 인풋
    static async userInput() {
        const TMP = await Console.readLineAsync("");
        if (!isNaN(TMP)) return Number(TMP);
        else return TMP;
    }
    // static async userInputMoney() {
    //     const TMP = await Console.readLineAsync(CONSTANT.MONEY_INPUT_ASK);
    //     return Number(TMP);
    // }
    // static async userInputLottoNum() {
    //     const TMP = await Console.readLineAsync(CONSTANT.LOTTO_NUM_INPUT_ASK);
    //     return TMP;
    // }
    // static async userInputBonusNum() {
    //     const TMP = await Console.readLineAsync(CONSTANT.BONUS_NUM_INPUT_ASK);
    //     return Number(TMP);
    // }

    // 가격을 로또 갯수로 반환
    static priceToAmount(price) {
        const AMOUNT = price / CONSTANT.LOTTO_PRICE;
        if (Number.isInteger(AMOUNT)) {
            return AMOUNT;
        } else if (!Number.isInteger(AMOUNT)) {
            throw new Error(CONSTANT.ERROR_PURCHASE_INPUT);
        }
    }

    // 받아온 로또 문자열을 숫자 배열로 반환 (예외처리 미포함)
    static lottoNumToArray(lottoNumStr) {
        const LOTTO_NUM_ARRAY = lottoNumStr.trim().split(",").map(Number);
        return LOTTO_NUM_ARRAY;
    }

    // 발행 번호와 당첨 번호를 비교해 일치 결과 반환
    static compareLottoNum(userLotto, winningLotto, bonusNum) {
        let result = 0;
        winningLotto.forEach((element) => {
            if (userLotto.includes(element)) result += 1;
        });
        if (result == 5 && userLotto.includes(bonusNum)) result = "b" + result;
        return result;
    }

    // 결과가 로또 상금과 관련이 있는 숫자인지 bool반환
    static isAllowedResult(lottoResult, result) {
        return Object.keys(lottoResult).includes(result);
    }

    // 6개의 랜덤 숫자 배열 반환
    static generateRandomLottoNum() {
        return Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    static isAllowedLottoNum(element) {
        return !(isNaN(element) || !(element >= 1 && element <= 45));
    }

    // 수익률 계산
    static rateOfReturnCal(money, lottoResult) {
        let price = 0;
        Object.entries(lottoResult).forEach((element) => {
            price += CONSTANT.WINNER_PRICE.get(element[0]) * element[1];
        });
        return ((price * 100) / money).toFixed(1);
    }
}

export default Controller;
