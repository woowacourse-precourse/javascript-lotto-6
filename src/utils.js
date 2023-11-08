import { Console } from '@woowacourse/mission-utils';

export function inputUserPurchaseAmount() {
  const purchaseAmount = Console.readLineAsync('구입금액을 입력해 주세요.\n');
  return purchaseAmount;
}

export async function inputUserWinningNumber() {
  const userInput = await Console.readLineAsync(
    '\n당첨 번호를 입력해 주세요.(,로 구분)\n',
  );
  const winningNumberList = userInput.toString().replace(/ /g, '').split(',');
  return winningNumberList;
}

export async function inputUserBonusNumber() {
  const userInput = await Console.readLineAsync(
    '\n보너스 번호를 입력해 주세요.\n',
  );
  return userInput;
}
