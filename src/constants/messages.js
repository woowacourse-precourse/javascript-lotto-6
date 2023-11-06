/**
 * 입력, 출력, 에러 등 사용자에게 보여지는 상수 정의
 */
import { RANDOM_NUMBER } from './numbers.js';

export const INPUT_MESSAGE = Object.freeze({
  price: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  publishCount: count => `${count}개를 구매했습니다.`,
  lotto: lotto => `[${lotto.join(', ')}]`,
});

export const ERROR_PRIFIX = '[ERROR] ';
export const ERROR_MESSAGE = Object.freeze({
  notDividedPrice: '로또 가격(1,000원) 단위로 입력해주세요.',
  negativePrice: '가격은 양수로 입력해주세요.',
  isNaN: '숫자를 입력해주세요.',
  notMatchedLength: '로또 번호는 6개여야 합니다.',
  invalidNumber: `로또 번호는 ${RANDOM_NUMBER.from}부터 ${RANDOM_NUMBER.to} 사이의 숫자여야 합니다.`,
  duplicateNumber: '중복된 숫자는 입력할 수 없습니다.',
});
