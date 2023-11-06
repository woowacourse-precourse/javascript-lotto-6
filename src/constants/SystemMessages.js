const SYSTEM_MESSAGES = Object.freeze({
	input_purchase_amount: '구입금액을 입력해 주세요.\n',
	input_winning_numbers: '당첨 번호를 입력해 주세요.\n',
	input_bonus_number: '\n보너스 번호를 입력해 주세요.\n',

	winning_statistics: '\n당첨 통계\n---',

	number_of_purchase(number) {
		return `\n${number}개를 구매했습니다.`;
	},
	number_of_match(number, price, total) {
		return `${number}개 일치 (${price}원) - ${total}개`;
	},
	number_of_match_bonusball(number, price, total) {
		return `${number}개 일치, 보너스 볼 일치 (${price}원) - ${total}개`;
	},
	rate_of_return(rate) {
		return `총 수익률은 ${rate}%입니다.`;
	},
});

export default SYSTEM_MESSAGES;
