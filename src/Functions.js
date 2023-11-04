import { Random } from "@woowacourse/mission-utils";

class Functions {
  lottoRandomNumber() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return Array.from(randomNumbers);
  }

  buyLottoByAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 금액이 1000원 단위가 아닙니다.");
    }

    const lottoList = [];
    const numberOfLottos = amount / 1000;

    for (let i = 0; i < numberOfLottos; i++) {
      const random = this.lottoRandomNumber();
      lottoList.push(random);
    }

    return lottoList;
  }
}

export default Functions;
