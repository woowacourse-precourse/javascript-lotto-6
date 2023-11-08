import { CONSOLE_MESSAGE } from '../utils/Define';
import inputView from './InputReader';
import outputView from './OutputView';

class View {
  async getPurchaseAmount() {
    const purchaseAmount = await inputView(CONSOLE_MESSAGE.requestBuying);
    return purchaseAmount;
  }

  async returnPurchaseLottos(lottos, quantitiy) {
    const resultString = lottos
      .map((lotto) => `[${lotto.getNumbers().join(', ')}]`) // 배열의 각 요소를 문자열로 변환하면서 공백을 추가합니다.
      .join('');
    await outputView(CONSOLE_MESSAGE.returnBuying, quantitiy, resultString);
    return resultString;
  }

  async getWinnigNumbers() {
    const winningNumbers = await inputView(CONSOLE_MESSAGE.requestLottoNumbers);
    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await inputView(CONSOLE_MESSAGE.requestBonusNumber);
    return bonusNumber;
  }

  async returnResult(lottoResult){
    await outputView(CONSOLE_MESSAGE.returnWinning);
      Object.entries(lottoResult).sort((a, b) => b[0] - a[0]).forEach(async ([_, [prize, matches, rank, count]]) => {
        await outputView(CONSOLE_MESSAGE.returnEachResult(matches, prize, count));
      });
    }


  async returnLottoROI(lottoROI){
    await outputView(CONSOLE_MESSAGE.returnLottoROI(lottoROI));
  }

}

export default View;
