/**
 * @typedef {object} CommonValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(inputValue : string) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} CommonValidationTypes
 * @property {CommonValidationType} emptyValues - 입력 값이 비어있는지를 검사하기 위한 객체
 * @property {CommonValidationType} existSpaces - 입력 값에 공백이 포함되어 있는지를 검사하기 위한 객체
 */

/**
 * @typedef {object} PurchasedLottoAmountValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(purchasedLottoAmount : number) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} PurchasedLottoAmountValidationTypes
 * @property {PurchasedLottoAmountValidationType} amountRange - 로또 구매 가격 범위를 검사하기 위한 객체
 * @property {PurchasedLottoAmountValidationType} lottoUnit - 로또 구매 가격이 로또 하나 당 가격으로 나누어 떨어지는지 검사하기 위한 객체
 */

/**
 * @typedef {object} LottoNumberValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(lottoNumber : number[]) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} LottoNumberValidationTypes
 * @property {LottoNumberValidationType} lottoNumberRange - 로또 번호 범위를 검사하기 위한 객체
 * @property {LottoNumberValidationType} lottoSize - 로또 갯수가 로또 하나 당 번호 갯수에 일치하는지 검사하기 위한 객체
 * @property {LottoNumberValidationType} duplicateNumber - 로또 번호 중 중복되는 번호가 있는지 검사하기 위한 객체
 */

/**
 * @typedef {object} BonusNumberValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(winningLottoInfo : Partial<WinningLottoInfo>) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} BonusNumberValidationTypes
 * @property {BonusNumberValidationType} bonusNumberRange - 로또 번호 범위를 검사하기 위한 객체
 * @property {BonusNumberValidationType} duplicateBonusNumber - 로또 번호 중 중복되는 번호가 있는지 검사하기 위한 객체
 */

/**
 * @typedef {object} RandomNumberGenerator
 * @property {(minNumber : number, maxNumber : number, count : number) => number[]} pickUniqueNumbersInRange - 랜덤 숫자의 배열을 반환
 */

/**
 * @typedef {object} BuyLottoNumbersParams
 * @property {RandomNumberGenerator} randomNumberGenerator - 랜덤 숫자 생성기
 * @property {number} purchasedLottoAmount - 로또 구매 금액
 */

/**
 * @typedef {object} PurchasedLottoInfo
 * @property {number[][]} lottoNumbers - 구매한 가격만큼의 로또 번호들
 * @property {number} purchasedLottoAmount - 로또 구매 금액
 */

/**
 * @typedef {object} WinningLottoInfo
 * @property {number[]} winningLottoNumber - 당첨 번호
 * @property {number} bonusNumber - 보너스 번호
 */

/**
 * @typedef {object} LottoNumberInfo
 * @property {number[][]} lottoNumbers - 구매한 가격만큼의 로또 번호들
 * @property {WinningLottoInfo} winningLottoInfo - 보너스 번호와 당첨 번호
 */

/**
 * @typedef {object} LottoMatchingInfo
 * @property {number} matchCount - 정답 횟수
 * @property {boolean} hasBonusNumber - 보너스 번호 정답 여부
 */

/**
 * @typedef {LottoMatchingInfo[]} LottoMatchingResult
 */

/**
 * @typedef {'1st' | '2nd' | '3rd' | '4th' | '5th'} LottoRank
 */

/**
 * @typedef {2000000000 | 30000000 | 1500000 | 50000 | 5000} LottoPrize
 */

/**
 * @typedef {object} RankInfoType
 * @property {number} matchCount - 정답 횟수
 * @property {boolean} hasBonusNumber - 보너스 번호 정답 여부
 * @property {number} prizeAmount - 당첨 금액
 * @property {LottoRank} rank - 등수
 */

/**
 * @typedef {Record<string, RankInfoType>} RankInfo
 */

/**
 * @typedef {Partial<Record<RankInfoType['rank'], number>>} RankDistributionTable
 */

/**
 * @typedef {object} PrizeTable
 * @property {2000000000} '1st' - 1등 보상 금액
 * @property {30000000} '2nd' - 2등 보상 금액
 * @property {1500000} '3rd' - 3등 보상 금액
 * @property {50000} '4th' - 4등 보상 금액
 * @property {5000} '5th' - 5등 보상 금액
 */

/**
 * @typedef {object} WinningInfo
 * @property {RankDistributionTable} rankDistributionTable - 각 등수 별 분포 수가 담긴 객체 반환 (모든 프로퍼티가 존재하는 것은 아님)
 * @property {number} prize - 총 당첨 금액
 */

/**
 * @typedef {object} WinningResult
 * @property {RankDistributionTable} rankDistributionTable - 각 등수 별 분포 수가 담긴 객체 반환 (모든 프로퍼티가 존재하는 것은 아님)
 * @property {number} rateOfReturn - 수익률
 */

export {};
