import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

const LottoPurchaser = {
  lottoList(inputPrice) {
    const countLotto = inputPrice / 1000;
    const lottoTickets = [];

    for (let i = 0; i < countLotto; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoTickets.push(randomNumber);
    }

    Console.print(`${countLotto}개를 구매했습니다.`);

    return lottoTickets;
  },

  checkWinningStatus(winningNumbers, bonusNumber, generatedLottoNumbers) {
    let winningStatistics = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    for (const ticket of generatedLottoNumbers) {
      const matchedNumbers = ticket.filter((number) =>
        winningNumbers.includes(number)
      );
      const bonusMatch = ticket.includes(Number(bonusNumber));

      if (matchedNumbers.length === 6) {
        winningStatistics[1]++;
      } else if (matchedNumbers.length === 5 && bonusMatch) {
        winningStatistics[2]++;
      } else if (matchedNumbers.length === 5) {
        winningStatistics[3]++;
      } else if (matchedNumbers.length === 4) {
        winningStatistics[4]++;
      } else if (matchedNumbers.length === 3) {
        winningStatistics[5]++;
      }
    }

    return winningStatistics;
  },
};

export default LottoPurchaser;
