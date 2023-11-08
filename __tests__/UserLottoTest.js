/* eslint-disable */
import UserLotto from '../src/model/UserLotto.js';
import { ERRORMESSAGE } from '../src/constants/constants.js';
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('UserLotto 클래스 테스트', () => {
	test('맞춘 번호에 따라 적절한 rank를 반환하는지 test', () => {
		mockRandoms([
      [1, 2, 3, 4, 5, 6],
			[1, 2, 3, 4, 5, 7],
			[1, 2, 3, 4, 5, 45],
			[1, 2, 3, 4, 44, 45],
			[1, 2, 3, 43, 44, 45],
    ]);

		const winningLotto = {
			lottoNumber: [1, 2, 3, 4, 5, 6],
			bonusNumber: 7,
		};
		
		const answer = {
			fifth: 1,
			fourth: 1,
			third: 1,
			second: 1,
			first: 1,
		};

		const userLotto = new UserLotto(5000);		
		expect(userLotto.calculateMatchingNumber(winningLotto)).toEqual(answer);
	});

  test('유효하지 않은 숫자로 구매 금액이 주어지면 예외가 발생.', () => {
    expect(() => {
      new UserLotto(NaN);
    }).toThrow(ERRORMESSAGE.purchaseInput);
  });

  test('1,000 단위로 나누어지지 않는 구매 금액이 주어지면 예외가 발생.', () => {
    expect(() => {
      new UserLotto(2500);
    }).toThrow(ERRORMESSAGE.purchaseAmount);
  });

  test('Number.MAX_SAFE_INTEGER를 초과하는 구매 금액이 주어지면 예외가 발생.', () => {
    expect(() => {
      new UserLotto(Number.MAX_SAFE_INTEGER + 1);
    }).toThrow(ERRORMESSAGE.purchaseToBig);
  });

  test('Number.MIN_SAFE_INTEGER 미만의 구매 금액이 주어지면 예외가 발생.', () => {
    expect(() => {
      new UserLotto(Number.MIN_SAFE_INTEGER - 1);
    }).toThrow(ERRORMESSAGE.purchaseToSmall);
  });

  test('음수 구매 금액이 주어지면 예외가 발생.', () => {
    expect(() => {
      new UserLotto(-1000);
    }).toThrow(ERRORMESSAGE.purchaseRange1);
  });

  test('4,000,000,000을 초과하는 구매 금액이 주어지면 예외가 발생.', () => {
    expect(() => {
      new UserLotto(4000000001);
    }).toThrow(ERRORMESSAGE.purchaseRange2);
  });
});


