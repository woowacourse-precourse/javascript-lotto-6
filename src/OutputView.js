import { Console, PRINT_PURCHASE_COUNT, PRINT_WINNING_STATISTIC, TOTAL_REVENUE } from './Constant';

const OutputView = {
  printLottoCount(lottoList) {
    Console.print(`${lottoList.length}${PRINT_PURCHASE_COUNT}`);
  },

  printLotto(lotto) {
    let lottoStr = '[';

    lotto.map((number, index) => {
      lottoStr += String(number);
      if (index + 1 !== lotto.length) {
        lottoStr += ', ';
      }
    });
    lottoStr += ']';
    Console.print(lottoStr);
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
        this.printResult(3, result, rank);
        break;
      case '2':
        this.printResult(4, result, rank);
        break;
      case '3':
        this.printResult(5, result, rank);
        break;
      case '4':
        this.printResult(5, result, rank);
        break;
      case '5':
        this.printResult(6, result, rank);
        break;
      default:
        Console.print('당첨 내역이 없습니다.');
        break;
    }
  },

  printResult(match, result, rank) {
    if (rank === '4') {
      Console.print(
        `5개 일치, 보너스 볼 일치 (${result[rank].prize.toLocaleString('ko-KR')}원) - ${
          result[rank].count
        }개`,
      );
    } else {
      Console.print(
        `${match}개 일치 (${result[rank].prize.toLocaleString('ko-KR')}원) - ${
          result[rank].count
        }개`,
      );
    }
  },

  printRevenueRate(rate) {
    Console.print(`${TOTAL_REVENUE}${rate}%입니다.`);
  },
};

export default OutputView;
