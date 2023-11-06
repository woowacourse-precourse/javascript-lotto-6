import { LOTTO_RULE, MESSAGES } from "../../src/constants";
import { getLogSpy, mockQuestions } from "../../src/utils";
import { LottoDrawMachine } from "../../src/domain/";
import { CustomError } from "../../src/exception";

const { LENGTH, RANGE } = LOTTO_RULE;
const { MIN, MAX } = RANGE;

describe("LottoDrawMachine 유닛 테스트", () => {
  const winningNumber = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  beforeEach(() => {
    const lottoDrawMachine = new LottoDrawMachine();
  });

  test("로또 인스턴스 생성", () => {
    const lotto = new LottoDrawMachine();
    expect(lotto).toBeInstanceOf(LottoDrawMachine);
  });

  describe("당첨 번호 입력 유효성 테스트", () => {
    const { NOT_UNIQUE, NOT_NUMBER, NOT_INTEGER, NOT_LENGTH, NOT_ON_RANGE } =
      MESSAGES.ERROR.LOTTO;

    const validWinningNumbers = [[["1,2,3,4,5,6"]]];
    const inValidWinningNumebrsAndMessages = [
      [["1,1,1,1,1,1"], NOT_UNIQUE],
      [["안,녕,하,세,요,!"], NOT_NUMBER],
      [["1,2,3,4,5"], NOT_LENGTH(LENGTH)],
      [["1.5,2.3,3.5,4.1,5.7,4.4"], NOT_INTEGER],
      [["-1,46,435,34314,1344,49404"], NOT_ON_RANGE(RANGE.MIN, RANGE.MAX)],
    ];

    test.each(validWinningNumbers)(
      "올바른 케이스",
      async (validWinningNumber) => {
        // given
        const logSpy = getLogSpy();
        const lottoDrawMachine = new LottoDrawMachine();
        mockQuestions(validWinningNumber);

        // when
        await lottoDrawMachine.promptWinningNumber(
          MESSAGES.WINNING_NUMBER.PLACE_HOLDER
        );

        // then
        await expect(logSpy).toHaveBeenCalledWith(
          expect.stringContaining(validWinningNumber.join(","))
        );
      }
    );

    test.each(inValidWinningNumebrsAndMessages)(
      "틀린 케이스",
      async (inValidWinningNumber, errorMessage) => {
        // given
        const lottoDrawMachine = new LottoDrawMachine();
        mockQuestions(inValidWinningNumber);
        // then
        await expect(lottoDrawMachine.promptWinningNumber()).rejects.toThrow(
          new CustomError(errorMessage)
        );
      }
    );
  });
});
