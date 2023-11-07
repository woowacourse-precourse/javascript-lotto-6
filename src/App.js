import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
class App {
    async play() {}

    buyLotto(pay) {
        if (pay.match(/\D/)) {
            throw new Error('[ERROR] 숫자만 입력해주세요.');
        }

        pay = Number(pay);

        if (pay < 1000) {
            throw new Error('[ERROR] 1000원 이상의 금액을 입력해주세요.');
        }

        if (pay % 1000 !== 0) {
            throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
        }

        const count = pay / 1000;
        const lottos = [];

        for (let i = 0; i < count; i++) {
            lottos.push(this.getLotto());
        }

        return lottos;
    }

    getLotto() {
        return new Lotto(
            MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
        );
    }

    getWinNumbers(numbers) {
        numbers = numbers.split(',').map((number) => Number(number));
        if (numbers.some((number) => isNaN(number))) {
            throw new Error('[ERROR] 숫자가 아닌 문자가 있습니다.');
        }

        if (numbers.length !== 6) {
            throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
        }

        if (new Set(numbers).size !== 6) {
            throw new Error('[ERROR] 당첨 번호에 중복된 숫자가 있습니다.');
        }

        numbers.forEach((number) => {
            if (number < 1 || number > 45) {
                throw new Error('[ERROR] 당첨 번호는 1부터 45사이여야 합니다.');
            }
        });
        return numbers;
    }

    getBonusNumbers(winNumbers, bonusNumber) {
        bonusNumber = Number(bonusNumber);

        if (winNumbers.includes(bonusNumber)) {
            throw new Error('[ERROR] 보너스 번호에 당첨 번호가 있습니다.');
        }

        if (isNaN(bonusNumber)) {
            throw new Error('[ERROR] 숫자가 아닌 문자가 있습니다.');
        }

        if (bonusNumber < 1 || bonusNumber > 45) {
            throw new Error('[ERROR] 보너스 번호는 1부터 45사이여야 합니다.');
        }

        return bonusNumber;
    }
}

export default App;
