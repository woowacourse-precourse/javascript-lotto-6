import Lotto from '../src/model/Lotto';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닌게 있으면 에러 발생', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow('[ERROR]');
  });

  test('6개가 아니면 에러 발생', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('범위 외 값', () => {
    expect(() => {
      new Lotto([-1, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
    expect(() => {
      new Lotto([5, 1, 2, 3, 4, 60]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
});

describe('Lotto 클래스', () => {
  describe('lot 메서드', () => {
    test('유저 로또 배열과 보너스 번호를 입력했을 때, 정확한 결과를 반환할 수 있어야 합니다', () => {
      // Arrange
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const userLotto = [1, 2, 7, 8, 9, 10];
      const bonus = 7;
      const expected = [2, 1]; // 예상되는 결과: [맞는 번호수, 보너스 번호 여부]

      // Act
      const result = lotto.lot(userLotto, bonus);

      // Assert
      expect(result).toEqual(expected);
    });

    // 기타 다양한 유저 로또 배열과 보너스 번호에 대한 테스트 케이스 추가 가능
  });

  describe('lotCount 메서드', () => {
    test('결과 배열을 입력했을 때, 등수별 개수를 올바르게 계산할 수 있어야 합니다', () => {
      // Arrange
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const results = [
        [2, 0],
        [3, 1],
        [4, 0],
        [5, 1],
      ];
      const expected = [1, 1, 0, 1, 0]; // 예상되는 결과: [3개 일치, 4개 일치, 5개 일치, 5개 일치+b, 6개 일치]

      // Act
      const result = lotto.lotCount(results);

      // Assert
      expect(result).toEqual(expected);
    });

    // 기타 다양한 결과 배열에 대한 테스트 케이스 추가 가능
  });
});

describe('Lotto 클래스', () => {
  describe('calculateReturnRate 메서드', () => {
    test('올바른 결과 배열과 금액을 입력했을 때, 올바른 수익률을 계산해야 합니다', () => {
      // Arrange
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const cntArr = [0, 1, 2, 3, 0]; // 예상되는 등수별 개수
      const money = 10000; // 입력 금액
      const expectedReturnRate = '930,500.0'; // 예상 수익률

      // Act
      const result = lotto.calculateReturnRate(cntArr, money);

      // Assert
      expect(result).toBe(expectedReturnRate);
    });

    // 기타 다양한 결과 배열과 금액에 대한 테스트 케이스 추가 가능
  });
  describe('calculateReturnRate 메서드', () => {
    test('올바른 결과 배열과 금액을 입력했을 때, 올바른 수익률을 계산해야 합니다', () => {
      // Arrange
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const cntArr = [0, 1, 0, 0, 0]; // 예상되는 등수별 개수
      const money = 10000; // 입력 금액
      const expectedReturnRate = '500.0'; // 예상 수익률

      // Act
      const result = lotto.calculateReturnRate(cntArr, money);

      // Assert
      expect(result).toBe(expectedReturnRate);
    });

    // 기타 다양한 결과 배열과 금액에 대한 테스트 케이스 추가 가능
  });
  describe('calculateReturnRate 메서드', () => {
    test('올바른 결과 배열과 금액을 입력했을 때, 올바른 수익률을 계산해야 합니다', () => {
      // Arrange
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const cntArr = [0, 0, 1, 0, 0]; // 예상되는 등수별 개수
      const money = 10000; // 입력 금액
      const expectedReturnRate = '15,000.0'; // 예상 수익률

      // Act
      const result = lotto.calculateReturnRate(cntArr, money);

      // Assert
      expect(result).toBe(expectedReturnRate);
    });

    // 기타 다양한 결과 배열과 금액에 대한 테스트 케이스 추가 가능
  });
  describe('calculateReturnRate 메서드', () => {
    test('올바른 결과 배열과 금액을 입력했을 때, 올바른 수익률을 계산해야 합니다', () => {
      // Arrange
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const cntArr = [0, 0, 0, 1, 0]; // 예상되는 등수별 개수
      const money = 10000; // 입력 금액
      const expectedReturnRate = '300,000.0'; // 예상 수익률

      // Act
      const result = lotto.calculateReturnRate(cntArr, money);

      // Assert
      expect(result).toBe(expectedReturnRate);
    });

    // 기타 다양한 결과 배열과 금액에 대한 테스트 케이스 추가 가능
  });
  describe('calculateReturnRate 메서드', () => {
    test('올바른 결과 배열과 금액을 입력했을 때, 올바른 수익률을 계산해야 합니다', () => {
      // Arrange
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const cntArr = [0, 0, 0, 0, 1]; // 예상되는 등수별 개수
      const money = 10000; // 입력 금액
      const expectedReturnRate = '20,000,000.0'; // 예상 수익률

      // Act
      const result = lotto.calculateReturnRate(cntArr, money);

      // Assert
      expect(result).toBe(expectedReturnRate);
    });

    // 기타 다양한 결과 배열과 금액에 대한 테스트 케이스 추가 가능
  });
});
