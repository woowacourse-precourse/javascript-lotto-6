import verificationBounsNumber from '../src/verificationBonusNumber';

describe('보너스 숫자 입력 유효성 검사', () => {
  it('입력한 숫자가 2개 이상 입력 되었을시', () => {
    const result = '1,2';
    expect(() => {
      verificationBounsNumber(result);
    }).toThrow('[ERROR] : 숫자가 잘못된 형식입니다.');
  });
  it('입력한 숫자가 1미만 일시', () => {
    const result = '0';
    expect(() => {
      verificationBounsNumber(result);
    }).toThrow('[ERROR] : 숫자가 잘못된 형식입니다.');
  });
  it('입력한 숫자가 45 초과 일시', () => {
    const result = '46';
    expect(() => {
      verificationBounsNumber(result);
    }).toThrow('[ERROR] : 숫자가 잘못된 형식입니다.');
  });
  it('중복된 숫자가 있을 경우', () => {
    const number = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 6;
    expect(() => {
      addNumber(bonusNumber, number).toThrow('[ERROR]: 겹치는 숫자 발생');
    });
  });
});
