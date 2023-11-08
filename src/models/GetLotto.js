import { Random } from "@woowacourse/mission-utils";

class GetLotto {
    calculateLottoCount(budget) {
        //로또 개수 계산
        const lottoCount = Math.floor(budget / 1000);
        return lottoCount;
    }

    generateLottoNumbers(lottoCount) {
        //lottoCount만큼의 로또 생성
        let lottos = [];

        while(lottos.length < lottoCount) {
            let lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
            lottoNumbers.sort((a, b) => a - b);
            lottos.push(lottoNumbers);
        }
        return lottos;
    }
}

export default GetLotto;