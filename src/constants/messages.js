const ERROR_HEADER = "[ERROR]";

export const ERROR_TYPE = {
  NOT_NUMBERS: `${ERROR_HEADER} 정수만 입력 가능합니다.`,
  OUT_OF_RANGE: `${ERROR_HEADER} 로또 번호는 1~45 범위 내에서만 입력 가능합니다.`,
  NOT_SIX_NUMBERS: `${ERROR_HEADER} 로또 번호는 6개만 입력 가능합니다.`,
  CONTAINS_WHITESPACE: `${ERROR_HEADER} 로또 번호는 공백을 포함할 수 없습니다.`,
  CONTAINS_DUPLICATES: `${ERROR_HEADER} 로또 번호는 중복을 포함할 수 없습니다.`,
  MINIMUM_PRICE: `${ERROR_HEADER} 최소 1000원 이상의 금액을 입력해야 합니다.`,
  CANNOT_DIVIDE_BY_1000: `${ERROR_HEADER} 1000원 단위로만 입력 가능합니다.`,
  CONTAINS_DUPLICATES_IN_BONUS: `${ERROR_HEADER} 보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
};

export const PROMPT_MESSAGE = {
  COST: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  PURCHASE_RESULT: "개를 구매했습니다.",
  WINNING_RESULT_HEADER: "당첨 통계\n---\n",
};

export const PROMPT_LOTTO_STATUS_RESULT = (value) => {
  return {
    MATCH_THREE: `3개 일치 (5,000원) - ${value}개}`,
    MATCH_FOUR: `4개 일치 (50,000원) - ${value}개}`,
    MATCH_FIVE: `5개 일치 (1,500,000원) - ${value}개}`,
    MATCH_FIVE_BONUS: `5개 일치, 보너스 볼 일치 (30,000,000원) - ${value}개}`,
    MATCH_SIX: `6개 일치 (2,000,000,000원) - ${value}개}`,
  };
};

export const PROMPT_TOTAL_WINNING_PRICE = (value) => {
  return {
    RESULT: `총 수익률은 ${value}%입니다.`,
  };
};
