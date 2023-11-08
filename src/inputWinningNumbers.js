import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js'; 

export default async function inputWinningNumbers() {
  const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해주세요.\n");
  winningNumbers = winningNumbers.split(',').map(Number);
  try {
    const lotto = new Lotto(winningNumbers);
    return lotto.getNumbers().sort((a,b) => a - b);
  } catch (error) {
    Console.print(error.message);
    return
  }
}