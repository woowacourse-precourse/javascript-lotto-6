import Lotto from './domain/Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';
class App {
  async play() {
    await autoLottoNumber(await amount());
  }
}

export default App;

const amount = async function inputAmount() {
  const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  validateAmount(input);
  return input;
};

const validateAmount = function validateAmount(amount) {
  if (amount % 1000 !== 0) {
    throw new Error('[ERROR] 1000원 단위로 입력해 주세요.');
  }
};

const winLottoNumber = async function inputWinLottoNumber() {
  let input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  input = input.split(',').map((number) => Number(number.trim()));
};

const bonusLottoNumber = async function inputBonusLottoNumber() {
  let input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  input = Number(input);
};

const autoLottoNumber = function generateAutoLottoNumber(amount) {
  const lottoNumbers = [];
  for (let i = 0; i < amount / 1000; i++) {
    const lottoNumberSet = new Set();
    while (lottoNumberSet.size < 6) {
      lottoNumberSet.add(Random.pickNumberInRange(1, 45));
    }
    lottoNumbers.push([...lottoNumberSet]);
  }
  console.log(lottoNumbers);
  return lottoNumbers;
};
