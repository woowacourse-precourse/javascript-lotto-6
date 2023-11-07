import Lotto from "../src/Lotto.js";
import { mockRandoms } from './ApplicationTest.js';


describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", async () => {
    mockRandoms([[1, 2, 3, 4, 5, 6, 7]]);
    expect(() => {  
      new Lotto();
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    mockRandoms([[1, 2, 3, 4, 5, 5]]);
    expect(() => {
      new Lotto();
    }).toThrow("[ERROR]");
  });

  test("로또 번호를 오름차순으로 정렬하여 출력한다.", () => {
    mockRandoms([[5, 6, 2, 4, 1, 3]]);
    const lotto = new Lotto();
    const result = lotto.getNumbers();

    expect(result).toContainEqual(1, 2, 3, 4, 5, 6);
  });

});
