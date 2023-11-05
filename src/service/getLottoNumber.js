import Lotto from '../Lotto.js';
import ascendingSortList from '../util/parse/ascendingSortList.js';
import parseToNumberArray from '../util/parse/parseToNumberArray.js';
import splitInput from '../util/parse/splitInput.js';

export default async function getLottoNumber(winningNumber) {
  try {
    const isolatedInput = splitInput(winningNumber);
    const parsedLotto = parseToNumberArray(isolatedInput);
    const winningNumbers = ascendingSortList(parsedLotto);

    const validLotto = new Lotto(winningNumbers);
    const lotto = validLotto.getNumbers();

    return lotto;
  } catch (error) {
    throw new Error(error.message);
  }
}
