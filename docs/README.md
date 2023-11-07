## validation

- numberType(value) : 입력값 타입 체크
- amountUnit(value) : 구입 금액 단위 체크
- numberCounter(numbers) : 당첨 번호 갯수 체크
- numberRange(value) : 당첨 번호 및 보너스 번호 범위 체크
- duplicateNum(numbers) : 중복값 체크
- amountValidate(amount) : 구매 금액 검증 함수
- winningNumsValidate(winningNums) : 당첨 번호 검증 함수
- bonusNumValidate(bonusNum) : 보너스 번호 검증 함수

## In & Out

- inputAmount() : 구매 금액 입력
- inputWinningNums() : 당첨 번호 입력
- inputBonusNum() : 보너스 번호 입력
- outputGameNums(games) : 게임 발행 출력
- outputResult(result) : 게임 결과 출력
- outputEarningRate(rate) : 이익률 출력

## Game Play

- publishGameNums(gameCnt) : 게임 번호 발행
- classificRank(count, haveBonusNum) : 등수 분류
- matchNums(game, bonusNum) : 맞한 갯수 카운트
- calcResult(games, bonusNum) : 결과 계산
- calcEarningRate(amount, earn) : 수익률 계산
