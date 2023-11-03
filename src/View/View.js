import { Console } from '@woowacourse/mission-utils';

class View {
  #price;
  #winningNumber;
  #bonusNumber;
  
  async inputPrice() {
    this.#price = await Console.readLineAsync('구매금액을 입력해 주세요.\n');
    return this.#price;
  }
  
  async inputWinningNumber() {
    const winningNumber = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    this.#winningNumber = winningNumber.split(',');
    this.#winningNumber = this.#winningNumber.map(num => Number(num));
    Console.print(this.#winningNumber);
    return this.#winningNumber;
  }

  async inputBonus() {
    this.#bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return this.#bonusNumber;
  }

  printQuantity(quantity) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
  }

  printLottoNumber(lottoNumber) {
    for (let i=0; i<lottoNumber.length; i+=1) {
      Console.print(lottoNumber[i]);
    }
    Console.print('');
  }

  printResult(result) {
    Console.print('당첨 통계');
    Console.print(`3개 일치 (5,000원) - ${result[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${result[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result[4]}개`);
  }

  printROI(roi) {
    Console.print(`총 수익률은 ${roi}%입니다.`);
  }
}

export default View;