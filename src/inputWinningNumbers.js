import { Console } from '@woowacourse/mission-utils';

export default async function inputWinningNumbers() {
  const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해주세요.\n");
  winningNumbers = winningNumbers.split(',').map(Number);
  
  // 판별 검사
}