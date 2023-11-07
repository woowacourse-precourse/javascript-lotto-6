import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

const LOTTO_PRIZE = {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
    6: 0,
};

const LOTTO_PRICE = 1000;

class App {
    async play() {
        const [pay, lottos] = await this.getUserPay();
        const winNumbers = await this.getUserWinNumbers();
        const bonusNumber = await this.getUserBonusNumber(winNumbers);
        const lottoRanks = this.getLottoRanks(lottos, winNumbers, bonusNumber);
        const lottoRate = this.getLottoRate(pay, lottoRanks);

        this.printLottoRanks(lottoRanks);
        this.printLottoRate(lottoRate);
    }

    async getUserPay() {
        try {
            const pay = await MissionUtils.Console.readLineAsync(
                '구입금액을 입력해 주세요.\n'
            );
            return [pay, this.buyLotto(pay)];
        } catch (e) {
            MissionUtils.Console.print(e.message);
            return this.getUserPay();
        }
    }

    async getUserWinNumbers() {
        try {
            const winNumbers = await MissionUtils.Console.readLineAsync(
                '당첨 번호를 입력해 주세요.\n'
            );
            return this.getWinNumbers(winNumbers);
        } catch (e) {
            MissionUtils.Console.print(e.message);
            return this.getUserWinNumbers();
        }
    }

    async getUserBonusNumber(winNumbers) {
        try {
            const bonusNumber = await MissionUtils.Console.readLineAsync(
                '보너스 번호를 입력해 주세요.\n'
            );
            return this.getBonusNumbers(winNumbers, bonusNumber);
        } catch (e) {
            MissionUtils.Console.print(e.message);
            return this.getUserBonusNumber(winNumbers);
        }
    }

    buyLotto(pay) {
        if (pay.match(/\D/)) {
            throw new Error('[ERROR] 숫자만 입력해주세요.');
        }

        pay = Number(pay);

        if (pay < LOTTO_PRICE) {
            throw new Error('[ERROR] 1000원 이상의 금액을 입력해주세요.');
        }

        if (pay % LOTTO_PRICE !== 0) {
            throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
        }

        const count = pay / LOTTO_PRICE;
        const lottos = [];
        // MissionUtils.Console.print('');
        MissionUtils.Console.print(`${count}개를 구매했습니다.`);

        for (let i = 0; i < count; i++) {
            const lotto = this.getLotto();
            MissionUtils.Console.print(`[${lotto.numbers.join(', ')}]`);
            lottos.push(lotto);
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

    getLottoRank(lottoNumbers, winNumbers, bonusNumber) {
        const count = lottoNumbers.filter((number) =>
            winNumbers.includes(number)
        ).length;

        switch (count) {
            case 6:
                return 1;
            case 5:
                return lottoNumbers.includes(bonusNumber) ? 2 : 3;
            case 4:
                return 4;
            case 3:
                return 5;
            default:
                return 6;
        }
    }

    getLottoRanks(lottos, winNumbers, bonusNumber) {
        const ranks = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

        lottos.forEach((lotto) => {
            const rank = this.getLottoRank(
                lotto.numbers,
                winNumbers,
                bonusNumber
            );
            ranks[rank]++;
        });

        return ranks;
    }

    getLottoRate(pay, lottoRanks) {
        const totalPrize = Object.keys(lottoRanks).reduce(
            (acc, rank) => acc + lottoRanks[rank] * LOTTO_PRIZE[rank],
            0
        );
        return Math.round((totalPrize / pay) * 1000) / 10;
    }

    printLottoRanks(lottoRanks) {
        MissionUtils.Console.print('당첨 통계');
        MissionUtils.Console.print('---');
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${lottoRanks[5]}개`);
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${lottoRanks[4]}개`);
        MissionUtils.Console.print(
            `5개 일치 (1,500,000원) - ${lottoRanks[3]}개`
        );
        MissionUtils.Console.print(
            `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoRanks[2]}개`
        );
        MissionUtils.Console.print(
            `6개 일치 (2,000,000,000원) - ${lottoRanks[1]}개`
        );
    }

    printLottoRate(lottoRate) {
        MissionUtils.Console.print(`총 수익률은 ${lottoRate}%입니다.`);
    }
}

export default App;
