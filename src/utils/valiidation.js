import {MissionUtils} from "@woowacourse/mission-utils";
import {LOTTO_INFO} from "../constants/Constants.js";

const validation = {
    hasSameNumber: (inputArr) => {
        const uniqueSet = new Set(inputArr);
        if (uniqueSet.size !== inputArr.length)
            throw new Error("[ERROR] 겹치는 숫자가 있습니다.");
    },

    isValidRange: (inputArr) => {
        inputArr.forEach((number) => {
            if (number < 1 || number > 45)
                throw new Error("[ERROR]1~45 사이로 입력해주세요.");
        });
    },

    isValidInputCount: (inputArr, count) => {
        if (inputArr.length !== count)
            throw new Error(`[ERROR] 로또 번호는 ${count}개를 입력하셔야 합니다.`);
    },

    isValidNumber: (input) => {
        if (isNaN(input)) throw new Error("[ERROR] 숫자를 입력하셔야 합니다.");
    },

    isValidMoney: (input) => {
        if (isNaN(input) || (input % LOTTO_INFO.LOTTO_PRICE) !== 0) {
            MissionUtils.Console.print("[ERROR] 1000원 단위의 숫자를 입력하셔야 합니다.");
            return 'retry'
        }
    },


    isValidBonusNumber: (winningNumbers, bonusNumber) => {
        validation.isValidInputCount([bonusNumber], 1);
        validation.isValidRange([bonusNumber]);
        validation.hasSameNumber([...winningNumbers, bonusNumber]);
        validation.isValidNumber(bonusNumber);
    }
};
export default validation;
