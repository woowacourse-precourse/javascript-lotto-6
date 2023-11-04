import Validation from '../../Controller/Validation';

describe('사용자 입력 유효성 검사', () => {
  const insertedMoneyTestInput = ['1500', '1000k', 'abcd', '', ' '];
  const winNumberInput = [
    '1,2,3,4,5,a',
    ' ,1,3,5,6,7',
    '1,2,3,4,5',
    '1,2,3,4,5,0',
  ];
  const bonusNumberInput = ['a', '', ' ', '72', '0'];

  test.each(insertedMoneyTestInput)(
    '입력된 구입 금액 유효성 테스트.',
    (input) => {
      expect(() => Validation.checkInsertedMoneyIsValid(input)).toThrow(
        '[ERROR]'
      );
    }
  );

  test.each(winNumberInput)('입력된 당첨 번호 유효성 테스트.', (input) => {
    expect(() => Validation.checkWinNumberIsValid(input)).toThrow('[ERROR]');
  });

  test.each(bonusNumberInput)('입력된 보너스 번호 유효성 테스트.', (input) => {
    expect(() => Validation.checkBonusNumberIsValid(input)).toThrow('[ERROR]');
  });
});
