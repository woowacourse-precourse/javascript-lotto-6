# 구현할 기능


## 게임 로직 Domain

- `SetGame.js` : 게임 설정
    - [x] `#validate` : 구매 금액 검증
    - [x] `#issueLotto` : 로또를 발행하여 배열로 저장하는 메소드 
    - [x] `getLottoNumbers` : 당첨 번호를 배열로 저장하는 메소드
    - [x] `getWinningStatus` : 당첨 현황을 반환하는 메서드
    - [x] `calcProfit` : 수익률을 계산하는 메서드

- `Lotto.js` : 한 장당 로또 번호
    - [x] `#validate` :  로또 번호 검증  
    - [x] `getNumbers` : 구매한 로또 번호 구하는 메서드
    - [x] `getMatchingCount` : 구매번호와 당첨번호 간 일치하는 로또 번호를 반환하는 메서드

- `LottoUtils.js` : 게임 진행에 필요한 도구 클래스  
    - [x] `matchingCountToArray` : 당첨번호와 일치하는 숫자 수를 배열로 반환하는 메서드
    - [x] `matchingCountToObject` : 6개의 번호와 보너스 번호를 확인하여, 일치하는 숫자를 객체로 반환한다.
    - [x] `checkBonusNumber`: 보너스 번호를 확인하는 메서드
    - [x] `checkGameResult`: 당첨결과를 확인하는 메서드 


##  입출력 View

-  `InputView.js` : 입력값을 받는 뷰  
    - [x] `inputBuyAmount` : 구입금액 입력 받고 반환
    - [x] `inputWinningNumber` : 당첨번호 입력 받고 반환
    - [x] `inputBonusNumber` : 보너스 번호 입력 받고 반환

-  `OutputView.js` : 출력값을 보여주는 기능
    - [x] `printLottoCount` : 로또 구매 수량 출력
    - [x] `printLottoNumbers` : 구매한 로또번호 출력 
    - [x] `printWinningStatus` : 당첨 현황 출력  
    - [x] `printProfit` : 수익률 출력 

## `LottoGame.js` : 로또 게임을 컨트롤 하는 곳

- `buyLotto` : 로또 구입 및 발행  
    - [x] 구입할 금액 입력 
    - [x] 구매할 수 있는 만큼 로또 발행
    - [x] 구매한 로또 랜덤으로 출력

- `calcWinner`: 당첨 현황 확인  
    - [x] 당첨 번호 입력
    - [x] 보너스 번호 입력
    - [x] 당첨 번호를 SetGame클래스으로 당첨현황 받기
    - [x] 당첨 현황 저장

- `lottoResult`: 당첨 현황 및 수익률 출력  
    - [x] 당첨 현황 출력
    - [x] 수익률 계산 및 출력


## 입력값 검증 (Validation)

- 검증 (Validation)
    - [x] 구매 금액 검증
    - [x] 보너스 넘버 검증
    - [x] 로또 넘버 검증
    
- 각 입력값당 검증 항목
    - 구입금액 입력값, 보너스 번호 입력, 로또 입력값 검증
 


 


    




