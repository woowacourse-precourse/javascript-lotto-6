const MESSAGES = {
  prize: {
    first: "6개 일치 (2,000,000,000원)",
    second: "5개 일치, 보너스 볼 일치 (30,000,000원)",
    third: "5개 일치 (1,500,000원)",
    fourth: "4개 일치 (50,000원)",
    fifth: "3개 일치 (5,000원)",
  },
  error: {
    notNumber: "[ERROR] 정수 숫자를 입력해 주세요.",
    invalidPricUnit: "[ERROR] 1,000 단위로 입력해 주세요.",
    invalidTargetNumbersLength: "[ERROR] 6자리 길이로 입력해 주세요.",
    notDuplicateTargetNumbers: "[ERROR] 중복된 숫자 없이 입력해 주세요.",
    invalidRange: "[ERROR] 1-45 범위의 숫자를 입력해 주세요.",
  },
  read: {
    buyPrice: "구입금액을 입력해 주세요.\n",
    targetNumber: "당첨 번호를 입력해 주세요.\n",
    bonusNumber: "보너스 번호를 입력해 주세요.\n",
  },
  buy: "구매했습니다.",
};

export default Object.freeze(MESSAGES);
