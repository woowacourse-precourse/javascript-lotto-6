const viewMessage = Object.freeze({
	INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
	INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
	INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
	OUTPUT_PURCHASE_HISTORY: (count) => `${count}개를 구매했습니다.`,
	OUTPUT_WINNING_RESULT: '당첨 통계\n---',
	OUTPUT_FIFTH_PLACE: (count) => `3개 일치 (5,000원) - ${count}개`,
	OUTPUT_FOURTH_PLACE: (count) => `4개 일치 (50,000원) - ${count}개`,
	OUTPUT_THIRD_PLACE: (count) => `5개 일치 (1,500,000원) - ${count}개`,
	OUTPUT_SECOND_PLACE: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
	OUTPUT_FIRST_PLACE: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
	OUTPUT_RATE_RETURN: (rate) => `총 수익률은 ${rate}%입니다.`,
});

export default viewMessage;