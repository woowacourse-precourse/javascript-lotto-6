import { Console } from '@woowacourse/mission-utils';
import Input from '../src/Input.js';
import ERROR from '../src/constants/Error';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('로또 금액 입력값 테스트(getLottoPrice)', () => {
  test('금액이 1000원 단위가 아닐 경우 에러 반환', async () => {
    const input = ['2500'];

    mockQuestions(input);

    await expect(Input.getLottoPrice()).rejects.toThrow(
      ERROR.purchaseThousands
    );
  });

  test('금액이 1000원보다 적을 경우 에러 반환', async () => {
    const input = ['0'];

    mockQuestions(input);

    await expect(Input.getLottoPrice()).rejects.toThrow(
      ERROR.purchaseMinNumber
    );
  });

  test('금액이 숫자가 아닐 경우 에러 반환', async () => {
    const input = ['a', ''];

    mockQuestions(input);

    await expect(Input.getLottoPrice()).rejects.toThrow(ERROR.purchaseIsNumber);
  });
});

describe('로또 당첨 번호 입력 테스트(getLottoNumber)', () => {
  test('중복된 번호가 있는 경우 에러 반환', async () => {
    const input = ['1,2,3,4,5,5'];

    mockQuestions(input);

    await expect(Input.getLottoNumber()).rejects.toThrow(
      ERROR.lottoIsNotDuplicate
    );
  });

  test('번호가 쉼표를 기준으로 구분되지 않는 경우 에러 반환', async () => {
    const input = ['1.2.3.4.5.6', ''];

    mockQuestions(input);

    await expect(Input.getLottoNumber()).rejects.toThrow(
      ERROR.lottoContainComma
    );
  });

  test('번호가 숫자가 아닌 경우 에러 반환', async () => {
    const input = ['a,1,2,3,4,5', '1,2,3,4,5,'];

    mockQuestions(input);

    await expect(Input.getLottoNumber()).rejects.toThrow(ERROR.lottoIsNumber);
  });

  test('번호가 1부터 45까지의 숫자가 아닌 경우 에러 반환', async () => {
    const input = ['1,2,3,4,5,46', '0,1,2,3,4,5'];

    mockQuestions(input);

    await expect(Input.getLottoNumber()).rejects.toThrow(ERROR.lottoRange);
  });

  test('번호가 6개가 아닌 경우 에러 반환', async () => {
    const input = ['1,2,3,4,5,6,7', '1,2,3,4,5'];

    mockQuestions(input);

    await expect(Input.getLottoNumber()).rejects.toThrow(ERROR.lottoCount);
  });
});
