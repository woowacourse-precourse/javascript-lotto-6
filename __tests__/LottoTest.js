import { LOTTO } from "../src/constants/lotto.js";
import BasicError from "../src/error/BasicError.js";
import Lotto from "../src/model/Lotto.js";
import { ErrorMessage } from "../src/utils/message.js";

export const getLottoNumbers = (start, end) => {
  if (end - start < LOTTO.NUMBER_COUNT) {
    throw new BasicError("로또 번호 만들기 불가능");
  }
  return [start, start + 1, start + 2, start + 3, start + 4, end];
};

export const createLotto = (numbers) => () => new Lotto(numbers);

describe("로또 클래스 테스트", () => {
  let numbers = [];

  beforeEach(() => {
    numbers = getLottoNumbers(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER);
  });

  test(`로또 번호의 개수가 ${LOTTO.NUMBER_COUNT}와 다르면 IncorrectLottoCountError`, () => {
    numbers.push(1);

    expect(createLotto(numbers)).toThrow(ErrorMessage.incorrectLottoCount());
  });

  test(`로또 번호가 숫자 형식이 아니면 IncorrectFormatError`, () => {
    numbers[0] = "0";

    expect(createLotto(numbers)).toThrow(ErrorMessage.incorrectFormat());
  });

  test(`${LOTTO.MIN_NUMBER} ~ ${LOTTO.MAX_NUMBER} 사이의 숫자가 아니면 IncorrectLottoNumberError`, () => {
    numbers[0] = LOTTO.MIN_NUMBER - 1;

    expect(createLotto(numbers)).toThrow(ErrorMessage.incorrectLottoNumber());
  });

  test("로또 번호가 중복된 값을 가지면 DuplicateNumbersError", () => {
    numbers[0] = numbers[1];

    expect(createLotto(numbers)).toThrow(ErrorMessage.duplicateNumbers());
  });

  test("getMatchCount : 정답 번호와 일치하는 개수 리턴", () => {
    const lotto = new Lotto(numbers);
    const bonusNumber = [LOTTO.MAX_NUMBER];

    const { matchLotto, matchBonus } = lotto.getMatchCount(numbers, bonusNumber);

    expect(matchLotto).toBe(LOTTO.NUMBER_COUNT);
    expect(matchBonus).toBeTruthy();
  });
});
