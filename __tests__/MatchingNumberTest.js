import WinningLotto from "../src/WinningLotto";

describe("로또 번호 비교 테스트", () => {
  test("로또 번호 비교 후 같은 숫자 개수 구하기", () => {
    //given
    const lotto = [1, 2, 3, 4, 5, 6];
    const numbers = [1, 2, 3, 4, 5, 9];

    //when
    const winningLotto = new WinningLotto();
    const compare = winningLotto.compare(numbers, lotto);

    //then
    expect(compare).toEqual(5);
  });

  test("해당 로또의 랭킹이 잘 리턴되는지", () => {
    //given
    const lotto = [1, 2, 3, 4, 5, 7];
    const bonusNumbers = 7;
    const sameNumberCount = 5;

    //when
    const winningLotto = new WinningLotto();
    const ranking = winningLotto.ranking(bonusNumbers, lotto, sameNumberCount);

    //then
    expect(ranking).toEqual(2);
  });
});
