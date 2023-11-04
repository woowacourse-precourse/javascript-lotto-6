import { Random } from "@woowacourse/mission-utils";

const makeLotto = () => {
  const randomLottoNumbers = [];
  while (randomLottoNumbers.length < 6) {
    const number = Random.pickNumberInRange(1, 45);
    if (!randomLottoNumbers.includes(number)) {
      randomLottoNumbers.push(number);
    }
  }
  return randomLottoNumbers.sort((a, b) => a - b);
};

export default makeLotto;
