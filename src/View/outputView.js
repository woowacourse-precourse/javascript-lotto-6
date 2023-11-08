import { Console } from '@woowacourse/mission-utils';
import { MATCHING_RANK, OUTPUT_MESSAGE } from '../constants/messages.js';

const outputView = {
	printLottoNumbers(amount, lottoNumbers) {
		Console.print(`\n${amount.toLocaleString('ko-KR')}${OUTPUT_MESSAGE.infoLottoNumbers}`);

		for (let i = 0; i < lottoNumbers.length; i++) {
			Console.print(lottoNumbers[i]);
		}
	},

	printMatchingStatics(rateOfReturn) {
		Console.print(`${OUTPUT_MESSAGE.matchingStatics}\n${OUTPUT_MESSAGE.hypen.repeat(OUTPUT_MESSAGE.HYPEN_COUNT)}`);

		for (let i = 0; i < 5; i++) {
			if (MATCHING_RANK[5 - i].matchingCount === 'bonus') {
				this.printBonusMatchingStatics(i, rateOfReturn);
			} else {
				Console.print(
					`${MATCHING_RANK[5 - i].matchingCount}개 일치 (${MATCHING_RANK[5 - i].proceed.toLocaleString(
						'ko-KR'
					)}원) - ${rateOfReturn.get(MATCHING_RANK[5 - i].matchingCount)}개`
				);
			}
		}
	},

	printBonusMatchingStatics(index, rateOfReturn) {
		Console.print(
			`5개 일치, 보너스 볼 일치 (${MATCHING_RANK[5 - index].proceed.toLocaleString('ko-KR')}원) - ${rateOfReturn.get(
				MATCHING_RANK[5 - index].matchingCount
			)}개`
		);
	},
};

export default outputView;
