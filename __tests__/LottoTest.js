import Lotto from "../src/Lotto.js";
import RandomNumberGenerator from "../src/domain/RandomNumberGenerator.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test.each([1,2,3,4,5])("로또 한 장당 랜덤 넘버로 이루어진 로또가 한 개 발행된다.", (input) => {
    const randomNumberGenerator = new RandomNumberGenerator();
    const randomNumbers = randomNumberGenerator.getRandomNumberArray(input);
    expect(randomNumbers).toHaveLength(input);
  })
});
