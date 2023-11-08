/* eslint-disable no-new */
/* eslint-disable max-lines-per-function */
import { Console } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';
import Create from '../src/Controller/Create.js';
import { ERROR_REGEX } from '../src/Utils/Regex.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_REGEX);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_REGEX);
  });

  // 아래에 추가 테스트 작성 가능
  let randomNum;

  beforeEach(() => {
    randomNum = [
      [3, 4, 5, 6, 7, 8],
      [3, 4, 5, 6, 7, 9],
      [3, 4, 5, 6, 8, 10],
    ];

    jest.restoreAllMocks();
  });

  test('입력된 번호에 따라 숫자매칭 결과, 수익률 반환', async () => {
    const user = [3, 4, 5, 6, 30, 40];

    const matchResult = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 3개',
      '5개 일치 (1,500,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
    ];

    jest.spyOn(Create.prototype, 'userBonusNumber').mockResolvedValue(7);

    const result = await new Lotto(user).compareWith(randomNum);

    expect(result).toEqual(
      expect.objectContaining({
        marginResult: 5000,
        matchResult: expect.arrayContaining(matchResult),
      })
    );
  });

  test('보너스 번호 비정상적인 값 입력 시 예외처리', async () => {
    jest.spyOn(Console, 'readLineAsync').mockResolvedValue(999);

    const result = () => new Lotto([1, 2, 3, 4, 5, 6]).compareWith(randomNum);

    await expect(result).rejects.toThrow(ERROR_REGEX);
  });
});
