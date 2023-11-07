import { CONSOLE_MESSAGE } from '../utils/Define';
import inputView from './InputReader';
import outputView from './OutputView';
import Lotto from '../Lotto';

const getPurchaseAmount = async () => {
  const purchaseAmount = await inputView(CONSOLE_MESSAGE.requestBuying);
  return purchaseAmount;
};

const returnPurchaseLottos = async (lottos) => {
  const resultString = lottos
    .map((lotto) => `[${lotto.getNumbers().join(', ')}]`) // 배열의 각 요소를 문자열로 변환하면서 공백을 추가합니다.
    .join('\n');
  await outputView(CONSOLE_MESSAGE.requestLottoNumbers, resultString);
  return resultString;
};

export { getPurchaseAmount, returnPurchaseLottos };
