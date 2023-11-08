## 📌 3주 차 미션 : 로또 게임 🎰

### 구현할 기능 목록

1️⃣ 게임 로직 (domain)

- 게임 진행 클래스 (LottoGame)
    - [x] 구입할 수 있는 만큼 로또를 발행하는 메소드 (#issueLotto)
    - [x] 구입한 로또 번호들을 반환 (getLottoNumbers)
    - [x] 각 로또 번호당 당첨 현황 반환 (getWinningStatus)
    - [x] 수익률 반환 (calculateRateOfReturn)

- 한개의 로또 클래스 (Lotto)
    - [x] 로또 번호 검증 (#validate)
    - [x] 당첨 번호와 비교해서 몇개의 번호가 일치하는지 반환 (getMatchingCount)
    - [x] 로또 번호를 반환 (getMatchingCount)

- 게임 진행에 필요한 도구 클래스 (GameUtils)
    - [x] 5개 일치한 번호가 있을 시 보너스 번호 비교하여 일치하면 bonus 반환 (checkBonusNumberMatch)
    - [x] 당첨 번호를 기반으로 각 로또의 일치하는 숫자 수를 배열로 반환 (matchingCountsWithArr)
    - [x] 일치하는 숫자 배열과 보너스 번호를 기반으로 일치하는 숫자의 개수를 객체로 반환 (matchingCountsWithObj)
    - [x] 일치하는 숫자의 개수를 모아놓은 객체를 사용자가 당첨결과로 볼 수 있도록 수정 (processMatchingNumbersToResult)

2️⃣ 입출력 (ui)

-  입력 (InputUi)
    - [x] 구입 금액을 입력 (askpurchaseAmount)
    - [x] 당첨 번호를 입력 (askWinningNumber)
    - [x] 보너스 번호를 입력 (askBonusNumber)

-  출력 (OutputUi)
    - [x] 로또 몇개를 구매했는지를 출력 (printNumberOfLotts)
    - [x] 구매한 로또 번호들을 출력 (printPurchasedLottos)
    - [x] 몇개가 일치하는지 보여주는 당첨 현황 출력 (printWinnigStatus)
    - [x] 총 수익률 출력 (printRateOfReturn)

3️⃣ 컨트롤러 (LottoController)

- 로또 구입 및 발행 (sellLotto)
    - [x] 구입 입력 
    - [x] 구매할 수 있는 만큼 로또 발행
    - [x] 구매한 로또 출력

- 당첨 계산 (winningCalculation)
    - [x] 당첨 번호 입력
    - [x] 보너스 번호 입력
    - [x] 당첨 번호를 LottoGame클래스에 전달하여 당첨현황 받기
    - [x] 당첨 현황 저장
- 당첨 현황 및 수익률 출력 (lottoResult)
    - [x] 받은 당첨 현황을 유저가 볼 수 있도록 바꿔 출력
    - [x] 수익률 계산
    - [x] 수익률 출력


4️⃣ 입력값 검증 (Validation)

- 검증 (Validation)
    - [x] 구매 금액 검증
    - [x] 보너스 넘버 검증
    - [x] 로또 넘버 검증
    
- 각 입력값당 검증 항목 (ValidationUtils의 메소드 사용)
    - 구입금액 입력값 검증
        - [x] 아무것도 입력하지 않았을 때 예외 발생 (isemptyInput)
        - [x] 양의 정수가 아닐 때 예외 발생 (isNotPositiveInteger)
        - [x] 1000으로 나누어 떨어지지 않았을 때 예외 발생 (isNotDivisibleLottoPrice)
    - 보너스 번호 입력 검증
        - [x] 아무것도 입력하지 않았을 때 예외 발생 (isemptyInput)
        - [x] 양의 정수가 아닐 때 예외 발생 (isNotPositiveInteger)
        - [x] 1~45숫자를 입력하지 않았을 때 예외 발생 (inLottoNumberRange)
    - 로또 입력값 검증 
        - [x] 배열이 로또의 길이와 맞지 않을 때 예외 발생 (isLottoLength)
        - [x] 각 항목들이 중복되었을 때 예외 발생 (isUniqueElements)
        - [x] 로또의 각번호가 양의정수가 아닐 때 예외 발생 (isNotPositiveInteger)
        - [x] 로또의 각번호가 1~45숫자가 아닐 때 예외 발생 (inLottoNumberRange)

5️⃣ 기타

- GameUtils나 ui에서 쓰이는 전역적인 도구 메소드 (Utils)

    - [x] 문자열을 ,를 기준으로 나누어 배열로 만듬 (splitComma)
    - [x] 2차원 배열안의 각 배열요소들을 오름차순으로 정렬 (sortLottoNumbers)
    - [x] 1~45의 6개의 랜덤 번호 생성 (generateRandomNumbers)
    - [x] key가 있다면 그 key값의 value에 1을 더하고, 그렇지 않다면 그 key값의 value는 1인 새로운 속성 생성 (addOrUpdatePropertyInObj)
    - [x] 객체 안의 key가 3보다 작다면 제거 (removeItemsWithNumericKeysLessThanThree)
    - [x] 객체안에 당첨의 일치하는 개수의 key가 없다면 value가 0인 프로퍼티로 생성 (addMissingElements)




    




