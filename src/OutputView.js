import { Console, PRINT_PURCHASE_COUNT, PRINT_WINNING_STATISTIC, TOTAL_REVENUE } from './Constant';

const OutputView = {
  printLottoCount(lottoList) {
    Console.print(`${lottoList.length}${PRINT_PURCHASE_COUNT}`);
  },

  printLotto(lotto) {
    Console.print(lotto);
  },

  printResultStastics(result) {
    Console.print(PRINT_WINNING_STATISTIC);
    Console.print('---');
    for (const rank in result) {
      this.getResultState(result, rank);
    }
  },

  getResultState(result, rank) {
    switch (rank) {
      case '1':
        Console.print(
          `3개 일치 (${result[rank].prize.toLocaleString('ko-KR')}원) - ${result[rank].count}개`,
        );
        break;

      case '2':
        Console.print(
          `4개 일치 (${result[rank].prize.toLocaleString('ko-KR')}원) - ${result[rank].count}개`,
        );

        break;

      case '3':
        Console.print(
          `5개 일치 (${result[rank].prize.toLocaleString('ko-KR')}원) - ${result[rank].count}개`,
        );

        break;

      case '4':
        Console.print(
          `5개 일치, 보너스 볼 일치 (${result[rank].prize.toLocaleString('ko-KR')}원) - ${
            result[rank].count
          }개`,
        );

        break;

      case '5':
        Console.print(
          `6개 일치 (${result[rank].prize.toLocaleString('ko-KR')}원) - ${result[rank].count}개`,
        );

        break;

      default:
        Console.print('당첨 내역이 없습니다.');
        break;
    }
  },

  printRevenueRate(rate) {
    Console.print(`${TOTAL_REVENUE}${rate}%입니다.`);
  },
};

export default OutputView;
