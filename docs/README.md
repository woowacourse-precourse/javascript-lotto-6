# 숫자 야구 기능 정리

# README.md 설명

본 README.md 파일은 우아한테크코스 프리코스의 3주차 미션 "로또"의 프로그래밍을 진행하며 필요한 기능들을 정리한다.
프로그래밍에 필요한 요구사항은 /docs/README.md가 아닌 ../README.dm에 기술되어 있으므로 추가 설명은 하지 않는다.

# 사용자 예상 수행 시나리오

1. 사용자에게 구매 금액을 입력받는다.
2. 구매 금액에 따른 lotto를 설정한다.
3. 사용자에게 당첨 번호을 입력받는다.
4. 사용자에게 보너스 번호를 입력받는다.
5. 구매 금액에 따른 로또들을 당첨번호와 비교하여 당첨여부를 확인한다.
6. 당첨 통계를 출력한다.

# 예상 구현 메소드

a. 예상 필요 메소드

    1) 사용자에게 구매 금액을 입력받는다.
        (a) 사용자에게 구매 금액을 입력받는다.
        (b) 입력받은 금액 검증
        (c) 적절한 메시지 출력

    2) 구매 금액에 따른 lotto를 설정한다.
        (a) 구매 금액에 따른 갯수만큼 lotto 클래스 선언
        (b) 적절한 메시지 출력

    3) 사용자에게 당첨 번호을 입력받는다.
        (a) 사용자에게 당첨 번호를 입력받는다.
        (b) 입력받은 당첨 번호 검증
        (c) 적절한 메시지 출력

    4) 사용자에게 보너스 번호를 입력받는다.
        (a) 사용자에게 보너스 번호를 입력받는다.
        (b) 입력받은 보너스 번호 검증
        (c) 적절한 메시지 출력

    5) 구매 금액에 따른 로또들을 당첨번호와 비교하여 당첨여부를 확인한다.
        (a) 구매한 각 로또 번호와 당첨 번호를 비교한다.
        (b) 비교한 결과를 기록한다.

    6) 당첨 통계를 출력한다.
        (a) 결과를 바탕으로 당첨 등수들을 출력한다.
        (b) 당첨금을 바탕으로 수익률을 출력한다.

# 실제 구현한 메소드 및 동작 구조

1.  setCashData()
    : 사용자에게 구매 금액을 입력받고 검증

    (a) enterValue()
    : 사용자로부터 구매금액을 입력받음

    (b) validateCheck()
    : 입력받은 구매금액을 검증
    (1) numCheck()
    : 입력받은 구매금액이 숫자임을 검증
    (2) unitCheck()
    : 입력받은 구매금액이 1000원 단위임을 검증
    (3) inRangeNumCheck()
    : 입력받은 구매금액이 양수인지 확인

    (c) printMessage()
    : 적절한 메시지 출력

2.  setLottos()
    : 구매 금액에 따른 구매할 로또 갯수 설정

    (a) printMessage()
    : 적절한 메시지 출력

3.  setPrizeNumber()
    : 사용자에게 당첨 번호를 입력받고 검증

    (a) enterValue()
    : 사용자로부터 당첨 번호를 입력받음

    (b) validatePrizeNumber()
    : 입력받은 당첨 번호를 검증
    (1) isNumCheck()
    : 입력받은 당첨 번호들이 숫자임을 검증
    (2) lengthCheck()
    : 입력받은 당첨 번호들이 6개임을 검증
    (3) sameNumCheck()
    : 입력받은 당첨 번호의 중복여부 검증
    (4) inRangeNumCheck()
    : 입력받은 당첨 번호의 범위(1~45) 검증

    (c) printMessage()
    : 적절한 메시지 출력

4.  setBonusNumber()
    : 사용자에게 보너스 번호를 입력받고 검증

    (a) enterValue()
    : 사용자로부터 보너스 번호를 입력받음

    (b) validateCheck()
    : 입력받은 보너스 번호를 검증
    (1) numCheck()
    : 입력받은 보너스 번호가 숫자임을 검증
    (2) duplicateCheck()
    : 입력받은 보너스 번호가 당첨 번호와 중복임을 검증
    (3) inRangeNumCheck()
    : 입력받은 보너스 번호의 범위(1~45) 검증

5.  calculateResult()
    : 구매한 로또들의 당첨 여부 확인 및 기록

    (a) counting()
    : 각 로또별 당첨 번호 갯수 count

6.  printResult()
    : 당첨 여부 기반으로 적절한 메시지 출력

    (a) printMessage()
    : 적절한 메시지 출력

7.  printProfit()
    : 당첨 여부 기반으로 수익률 출력

    (a) printMessage()
    : 적절한 메시지 출력

# 수행 결과

ApplicationTest.js
LottoTest.js
+) BounsTest.js (보너스 숫자 검증)
+) PrizeNumTest.js (당첨 번호 검증)
+) functionTest.js (method 기능 테스트)

npm test를 통한 확인 결과

Test Suites: 5passed, 5total
Test: 18passed, 18 total
Snapshots: 0 total
Time: 1.356 s, estimated 2 s

# 2주차 중점적으로 생각한 부분

1. 기능별 구현시 commit
2. 커밋 메시지 컨벤션 준수
3. 주석 작성
4. default(클린코드 지향)
   (a) indent 3 넘지않도록 구현
   (b) 함수가 한가지 일만 하도록
   (c) jest 테스트 코드 작성
   (d) else 지양
   (e) 테스트 구현(검증 코드 및 결과확인)
