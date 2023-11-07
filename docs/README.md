### 미션 - 로또 기능목록

# 구입금액 입력 - InputMoney#inputMoney()
- [x]구입금액을 입력 받는다.
- [x]1000으로 나눈 몫을 이용하여 구매 장수를 반환한다.
- [x]try-catch를 이용하여 "[ERROR]"로 시작하는 에러 메시지를 출력하고 return 재귀함수를 이용하여 해당 부분부터 입력을 다시 받는다.

# 구입금액 유효성 검증 - MoneyValidity#inputMoneyValidity()
- [x]1000으로 나누어 나머지가 존재하면 예외로 판단한다.

# 구매장수 출력 - PrintNUmberOfLotto#printNumberOfLotto()
- [x]반환한 값을 이용하여 'x개를 구매했습니다'를 출력한다. 

# 번호 출력 - PrintPurchasedLottoResult#result()
- [x]아래 과정들을 구매 장수만큼 반복한다.
- [x]pickUniqueNumbersInRange를 통해 1부터 45까지 6개의 랜덤 번호를 뽑는다.
- [x]로또 번호는 sort()함수를 이용하여 오름차순으로 정렬한다.
- [x]출력한다.
- [x]배열을 생성해 push함수를 이용해 저장한다.

# 로또 번호 입력 - InputLotto#lotto()
- [x]로또 번호를 ,로 구분하여 입력받는다.
- [x]split을 이용하여 배열화 한다.
- [x]map(Number)을 이용하여 문자열을 숫자로 바꾼다.
- [x]try-catch를 이용하여 "[ERROR]"로 시작하는 에러 메시지를 출력하고 return 재귀함수를 이용하여 해당 부분부터 입력을 다시 받는다.

# 로또 번호 유효성 검증 - Lotto
- [x]numbers의 값이 privatefield이므로 값이 undefined가 되어 property나 method를 이용하지 못한다. 이러한 것을 방지하기위하여 sort()를 이용하여 값을 설정해준다. - Lotto#numbersSort()
- [x]당첨 번호가 6자리인지 확인한다. - Lotto#validate()
- [x]숫자인지 확인한다. - Lotto#numberNaNvalidity()
- [x]1에서 45 사이 숫자인지 확인한다. - Lotto#numberRangeValidity()
- [x]중복되는 수가 없는지 확인한다. - Lotto#numberDuplicateValidity()

# 보너스 번호 입력 - InputBonusNumber#bonusNumber()
- [x]보너스 번호를 입력받는다.
- [x]Number를 이용하여 받은 문자열을 숫자로 바꾼다.
- [x]try-catch를 이용하여 "[ERROR]"로 시작하는 에러 메시지를 출력하고 return 재귀함수를 이용하여 해당 부분부터 입력을 다시 받는다.

# 보너스 번호 유효성 검증 - BonusNumberValidity#inputNumberValidity()
- [x]숫자인지 확인한다. - BonusNumberValidity#numberNaNvalidity()
- [x]1에서 45 사이 숫자인지 확인한다. - BonusNumberValidity#numberRangeValidity()
- [x]앞에 입력받은 당첨 번호와의 중복이 없는지 확인한다. - BonusNumberValidity#numberDuplicateValidity()

# 로또 번호 일치 검증 - LottoNumberMatch
- [x]길이 5, 값 0으로 채워진 등수 배열을 생성한다.
- [x]아래의 과정을 로또 구매 장수만큼 반복한다. (for-of를 이용하여 2차원 배열들의 배열 수만큼 반복한다.) - LottoNumberMatch#matchResult()
    - [x]filter와 includes를 이용하여 로또 배열과 입력받은 배열에 공통된 수가 있는지 확인하여 배열의 교집합을 반환한다.
    - [x]교집합의 길이를 이용한다.
- [x]3개 일치했다면 5등을 확인한다. - LottoNumberMatch#matchThree()
- [x]4개 일치했다면 4등을 확인한다. - LottoNumberMatch#matchFour()
- [x]5개 일치했다면 3등을 확인한다. - LottoNumberMatch#matchFive()
    - [x]만약 5개가 일치했다면 includes를 이용하여 로또 배열에 보너스 번호가 있는지를 파악하여 2등 여부를 확인한다
- [x]6개 일치했다면 1등을 확인한다. - LottoNumberMatch#matchSix()
- [x]등수 배열[0]은 5등, 등수 배열[1]은 4등, 등수 배열[2]는 3등, 등수 배열[3]은 2등 그리고 등수 배열[4]는 1등으로 해당 등수마다 배열의 값을 +1한다
- [x]등수 배열을 리턴한다.

# 당첨 통계 출력 - PrintResult#print()
- [x]리턴 받은 등수 배열을 이용하여 각 자리에 맞는 당첨 통계를 출력한다.

# 수익률 계산 - CalculateRateOfReturn#calculate()
- [x]리턴 받은 등수 배열의 각 숫자와 해당 금액을 곱하여 수익 총액을 계산한다.
- [x]수익총액을 구입금액으로 나눈 뒤 곱하기 100을 하여 수익률 값을 계산한다.
- [x]수익률 값을 toFixed를 이용하여 소수점 둘째 자리에서 반올림한다.
- [x]이를 반환한다.

# 수익률 출력 - PrintRateOfReturn#print()
- [x]리턴받은 수익률 값을 출력한다.


