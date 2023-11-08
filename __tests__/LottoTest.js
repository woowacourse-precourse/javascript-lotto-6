import Lotto from "../src/Lotto.js";
import App from "../src/App.js";

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
  test("로또 번호에 정수가 아닌 값이 있으면 예외발생", () => {
    const input = [1,2,3,4,5,0.1];

    expect(() => {
      new Lotto(input);
    }).toThrow('[ERROR]');

  })

  test("로또 번호가 1~45 범위를 벗어나면 예외 발생", () => {
    const inputs = [[1,2,3,4,5,0], [1,2,3,4,5,46]];

    inputs.forEach((input) => {
      expect(() => {
        new Lotto(input);
      }).toThrow('[ERROR]');
    })
  })
});

describe("App 클래스 테스트", () => {
  const app = new App();

  test("문자열이 숫자가 아닌경우 예외 발생", () => {
    const inputs = ['a', '12a', 'a12'];

    inputs.forEach((input) => {
      expect(() => {
        app.stringToNumber(input);
      }).toThrow('[ERROR]');
    })
  });

  test("사용자가 입력한 가격이 유효한 값이 아닌경우 예외 발생", ()=> {
    const inputs = ['a', '0.001, -1000', '0', '1500'];

    inputs.forEach((input) => {
      expect(() => {
        app.checkIsValidPrice(input);
      }).toThrow('[ERROR]');
    })
  }) 

  test("사용자가 입력한 로또 번호가 숫자가 아닐때 예외 발생", () => {
    const inputs = ['1,2,3,4,5,a', 'a'];

    inputs.forEach((input) => {
      expect(() => {
        app.parseWinningNumbers(input);
      }).toThrow('[ERROR]');
    })
  });

  test("보너스 숫자가 유효한 값이 아닌경우 예외발생", () => {
    const inputs = [-1, 'a', 0.1, 0, 46, 1];
    const winningNumbers = [false, true];

    inputs.forEach((input) => {
      expect(() => {
        app.checkBonusNumber(input, winningNumbers);
      }).toThrow('[ERROR]');
    })
  })
})