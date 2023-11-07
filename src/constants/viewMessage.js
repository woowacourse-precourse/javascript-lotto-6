export const INPUT_VIEW_MESSAGE = Object.freeze({
	purchaseAmount: '구입금액을 입력해 주세요.\n',
	winningNumbers: '당첨 번호를 입력해 주세요.\n',
	bonusNumber: '보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_VIEW_MESSAGE = Object.freeze({
	winningResult: '당첨 통계',
	threeDashLine: '---',
	purchaseHistoryFn: (count) => `${count}개를 구매했습니다.`,
	fifthPlaceFn: (count) => `3개 일치 (5,000원) - ${count}개`,
	fourthPlaceFn: (count) => `4개 일치 (50,000원) - ${count}개`,
	thirdPlaceFn: (count) => `5개 일치 (1,500,000원) - ${count}개`,
	secondPlaceFn: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
	firstPlaceFn: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
	rateReturnFn: (rate) => `총 수익률은 ${rate}%입니다.`,
});