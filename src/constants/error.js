const ERROR_MESSAGE = Object.freeze({
  generateIssue: '[ERROR] 로또가 제대로 발행되지 않았습니다. 다시 발행합니다.',
  notNumber: '[ERROR] 숫자만 입력해주세요.',
  invalidInput:
    '[ERROR] 입력한 금액이 1000원으로 나누어떨어지지 않습니다. 다시 입력해주세요.',
  invalidLottoNumRange: '[ERROR] 1부터 45사이의 수를 입력해주세요.',
  invalidLottoLength: '[ERROR] 당첨번호를 6자리 이하로 입력해주세요.',
  duplicatedWinningLotto: '[ERROR] 당첨번호와 중복됩니다. 다시 입력해주세요.',
  duplicatedLottoNum: '[ERROR] 중복된 숫자가 있습니다. 다시 입력해주세요.',
});

export default ERROR_MESSAGE;
