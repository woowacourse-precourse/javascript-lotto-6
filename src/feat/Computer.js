import { Random } from "@woowacourse/mission-utils";
class Computer {
  static MIN_LOTTO_NUMBER = 1;
  static MAX_LOTTO_NUMBER = 45;

  issuanceLotto = (lottoAmount) => {
    var lottoList = Array.from({ length: lottoAmount }, () => []);

    for (let i = 0; i < lottoAmount; i++) {
      while (lottoList[i].length !== 6) {
        const lottoNumber = Random.pickNumberInRange(
          Computer.MIN_LOTTO_NUMBER,
          Computer.MAX_LOTTO_NUMBER,
        );
        if (!lottoList[i].includes(lottoNumber)) {
          lottoList[i].push(lottoNumber);
        }
      }
    }
    console.log(lottoList);
  };
}

export default Computer;
