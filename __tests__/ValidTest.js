import CheckValid from '../src/CheckValid';

describe('입력값 유효성 테스트', () => {
  test('금액이 1000원 단위가 아닐경우 에러 발생', () => {
    expect(() => {
      CheckValid.checkMoney('500');
    }).toThrow('[ERROR]');
  });

  test('금액에 문자가 있을 경우 에러 발생', () => {
    expect(() => {
      CheckValid.checkMoney('1000a');
    }).toThrow('[ERROR]');
  });

  test('금액이 없을 경우 에러발생', () => {
    expect(() => {
      CheckValid.checkMoney('');
    }).toThrow('[ERROR]');
  });

  test('금액이 음수일 경우 에러 발생', () => {
    expect(() => {
      CheckValid.checkMoney('-1');
    }).toThrow('[ERROR]');
  });

  test('당첨번호가 1-45사이의 번호가 아닌 경우 ', () => {
    const inputs = ['1,2,3,4,5,-1', '1,2,3,4,5,0', '1,2,3,4,5,46'];

    inputs.forEach((input) => {
      expect(() => {
        CheckValid.checkWinNumber(input);
      }).toThrow('[ERROR]');
    });
  });

  test('당첨번호가 6개가 아닌 경우', () => {
    const inputs = ['1,2,3,4,5', '1,2,3,4,5,6,7'];

    inputs.forEach((input) => {
      expect(() => {
        CheckValid.checkWinNumber(input);
      }).toThrow('[ERROR]');
    });
  });

  test('당첨번호에 문자가 있는 경우', () => {
    const inputs = ['1,2,3,4,5,a', '1,2,3,4,5,,'];

    inputs.forEach((input) => {
      expect(() => {
        CheckValid.checkWinNumber(input);
      }).toThrow('[ERROR]');
    });
  });

  test('보너스 번호와 당첨 번호가 중복인 경우', () => {
    const winNum = '1,2,3,4,5,6';
    const bonus = '6';

    expect(() => {
      CheckValid.checkBonusNumber(bonus, winNum);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 문자인 경우', () => {
    const bonus = 'a';
    const winNum = '1,2,3,4,5,6';
    expect(() => {
      CheckValid.checkBonusNumber(bonus, winNum);
    }).toThrow('[ERROR]');
  });
});
