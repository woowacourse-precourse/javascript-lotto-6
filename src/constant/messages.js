export const INPUT_MESSEGE = Object.freeze({
  purchase: '구입금액을 입력해 주세요.\n',
  winning: '\n당첨 번호를 입력해 주세요.\n',
  bonus: '\n보너스 번호를 입력해 주세요.\n',
});

export const ERROR_MESSEGE = Object.freeze({
  notNumber: '[ERROR] 숫자만 입력하여 주세요.\n',
  notPositive: '[ERROR] 양수만 입력하여 주세요.\n',
  notInput: '[ERROR] 입력이 없습니다.\n',
  not1000Multiple: '[ERROR] 1000 단위로 입력하여 주세요.\n',
  notSixNumbers: '[ERROR] 당첨번호는 6개여야 합니다.\n',
  outOfRange: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.\n',
  duplicates: '[ERROR] 중복된 숫자가 있습니다.\n',
});
