import { Console } from '@woowacourse/mission-utils';

const readLine = (message) => Console.readLineAsync(message);

export const readLottoSeedMoney = () => readLine('구입금액을 입력해 주세요.\n');

export const readLottoMainNumbers = () =>
  readLine('당첨 번호를 입력해 주세요.\n');

export const readLottoBonusNumber = () =>
  readLine('보너스 번호를 입력해 주세요.\n');
