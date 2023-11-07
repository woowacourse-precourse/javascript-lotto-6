import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

const LottoPurchaser = {
  lottoList(inputPrice) {
    const countLotto = inputPrice / 1000;
    const lottoTickets = [];

    const generateLottoNumbers = () => {
      return Random.pickUniqueNumbersInRange(1, 45, 6);
    };

    for (let i = 0; i < countLotto; i++) {
      const randomNumber = generateLottoNumbers();
      lottoTickets.push(randomNumber);
    }

    Console.print(`${countLotto}개를 구매했습니다.`);

    return lottoTickets;
  },
};

export default LottoPurchaser;
