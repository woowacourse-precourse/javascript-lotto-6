import LOTTO_NUMBER from "../../src/constants/LottoNumber.js";
import PRIZE_MONEY from "../../src/constants/PrizeMoney.js";
import GameUtils from "../../src/utils/GameUtils.js";

describe('게임 유틸 테스트', () => {
  test('10000원 금액으로 살 수 있는 로또는 10개로 나옵니다.', () => {
    // given
    const amount = 10000;
    const answer = 10;

    // when
    const lottoTickets = GameUtils.dividedByThousand(amount);

    // then
    expect(lottoTickets).toEqual(answer);
  });

  test('1부터 45까지의 랜덤한 수 6개를 생성받습니다.', () => {
    // given
    const randomNumberCount = LOTTO_NUMBER.COUNT;

    // when
    const randomNumber = GameUtils.createRandomUniqueSixNumberFromOneToForthFive();

    // then
    expect(randomNumber.length).toEqual(randomNumberCount);
  });

  test('1,4,5,7,2,9를 오름차순으로 정렬하여 1,2,4,5,7,9로 반환받습니다.', () => {
    // given
    const randomNumber = [1, 4, 5, 7, 2, 9];
    const answer = [1, 2, 4, 5, 7, 9];

    // when
    GameUtils.sortRandomNumberInAscendingOrder(randomNumber);

    // then
    expect(randomNumber).toEqual(answer);
  });

  test('내 티켓과 로또 번호가 3개 동일하면 5000원을 수령합니다.', () => {
    // given
    const myLottoNumber = [1,2,3,4,5,6];
    const winningNumber = [4,5,6,7,8,9];
    const bonusNumber = 10;

    const answer = PRIZE_MONEY.FIFTH;

    // when
    const differences = GameUtils.getDifferenceElements(myLottoNumber, winningNumber);
    const prize = GameUtils.getPrize(differences, bonusNumber);

    // then
    expect(prize).toEqual(answer);
  });

  test('내 티켓과 로또 번호가 4개 동일하면 50000원을 수령합니다.', () => {
    // given
    const myLottoNumber = [1,2,3,4,5,6];
    const winningNumber = [1,2,3,4,8,9];
    const bonusNumber = 10;

    const answer = PRIZE_MONEY.FOURTH;

    // when
    const differences = GameUtils.getDifferenceElements(myLottoNumber, winningNumber);
    const prize = GameUtils.getPrize(differences, bonusNumber);

    // then
    expect(prize).toEqual(answer);
  });

  test('내 티켓과 로또 번호가 5개 동일하고 보너스 번호는 다른 경우 1500000원을 수령합니다.', () => {
    // given
    const myLottoNumber = [1,2,3,4,5,6];
    const winningNumber = [1,2,3,4,5,7];
    const bonusNumber = 10;

    const answer = PRIZE_MONEY.THIRD;

    // when
    const differences = GameUtils.getDifferenceElements(myLottoNumber, winningNumber);
    const prize = GameUtils.getPrize(differences, bonusNumber);

    // then
    expect(prize).toEqual(answer);
  });

  test('내 티켓과 로또 번호가 5개 동일하고 보너스 번호를 맞춘 경우 30000000원을 수령합니다.', () => {
    // given
    const myLottoNumber = [1,2,3,4,5,6];
    const winningNumber = [1,2,3,4,5,7];
    const bonusNumber = 6;

    const answer = PRIZE_MONEY.SECOND;

    // when
    const differences = GameUtils.getDifferenceElements(myLottoNumber, winningNumber);
    const prize = GameUtils.getPrize(differences, bonusNumber);

    // then
    expect(prize).toEqual(answer);
  });

  test('내 티켓과 로또 번호가 모두 동일한 경우 2000000000원을 수령합니다.', () => {
    // given
    const myLottoNumber = [1,2,3,4,5,6];
    const winningNumber = [1,2,3,4,5,6];
    const bonusNumber = 7;

    const answer = PRIZE_MONEY.FIRST;

    // when
    const differences = GameUtils.getDifferenceElements(myLottoNumber, winningNumber);
    const prize = GameUtils.getPrize(differences, bonusNumber);

    // then
    expect(prize).toEqual(answer);
  });
});
