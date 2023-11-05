import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

const LottoPurchaser = {
  async lottoList(inputPrice) {
    const countLotto = inputPrice / 1000;
    Console.print(`${countLotto}개를 구매했습니다.`);

    const generateLottoNumbers = () => {
      return Random.pickUniqueNumbersInRange(1, 45, 6);
    };

    for (let i = 0; i < countLotto; i++) {
      const randomNumber = generateLottoNumbers();
      console.log(randomNumber);
    }
  },
};

export default LottoPurchaser;
