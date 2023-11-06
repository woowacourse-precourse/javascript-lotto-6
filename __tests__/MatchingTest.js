import Matching from "../src/Game/Matching";
import Lotto from "../src/Lotto";

const mockRandoms = [
  [1, 12, 13, 14, 15, 16],
  [1, 2, 3, 14, 15, 16],
  [1, 2, 3, 4, 15, 16],
  [1, 2, 3, 4, 5, 16],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 7],
];

const mockLottos = [];
for (let i = 0; i < mockRandoms.length; i += 1) {
  const random = mockRandoms[i];
  const lotto = new Lotto(random);
  mockLottos.push(lotto);
}

const wins = [1, 3, 4, 5, 6, 5.1];

test.each(mockLottos)("맞춘 번호의 개수만큼 값이 반환되어야 한다.", (lotto) => {
  //given
  const win = wins.shift();
  const prize = {
    line: [1, 2, 3, 4, 5, 6],
    bonus: 7,
  };
  const spyMatching = jest.spyOn(Matching, "between");

  //when
  Matching.between(lotto, prize);

  //then
  expect(spyMatching).toHaveReturnedWith(win);
});
