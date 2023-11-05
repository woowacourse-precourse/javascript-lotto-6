import { Random } from "@woowacourse/mission-utils";

class GetLotto {
    calculateLottoCount(budget) {
        //로또 개수 계산
        const lottoCount = Math.floor(budget / 1000);
        return lottoCount;
    }

    generateLottoNumbers(lottoCount) {
        //lottoCount만큼의 로또 생성
        const lottos = [];
        for(let i = 0; i < lottoCount; i++) {
            const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
            lottos.push(lottoNumbers);
        }
        return lottos;
    }
}

export default GetLotto;