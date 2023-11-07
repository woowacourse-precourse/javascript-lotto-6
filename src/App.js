import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
class App {
    async play() {}

    buyLotto(pay) {
        if (pay.match(/\D/)) {
            throw '[ERROR] 숫자만 입력해주세요.';
        }

        pay = Number(pay);

        if (pay < 1000) {
            throw '[ERROR] 1000원 이상의 금액을 입력해주세요.';
        }

        if (pay % 1000 !== 0) {
            throw '[ERROR] 1000원 단위로 입력해주세요.';
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
}

export default App;
