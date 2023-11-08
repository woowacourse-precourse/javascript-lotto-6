# :school: 우아한테크코스 6기 프리코스 3주차 미션 - 로또

## :clipboard: 구현할 기능 목록

1. 사용자 입력
- [x] 구입 금액 입력
- [x] 당첨 번호 입력
- [x] 보너스 번호 입력

2. 로또
- [x] 로또를 구입한 금액을 입력받는 기능
- [x] 입력받은 로또금액의 유효성 체크하는 기능
- [x] 로또구입금액의 1,000단위로 랜덤 로또 번호를 받는 기능
- [x] 로또의 순위를 계산하는 기능
- [x] 로또 결과에 따른 수익율을 계산하는 기능

3. 보너스번호
- [x] 보너스번호를 입력받는 기능
- [x] 입력받은 보너스번호의 유효성 체크하는 기능

4. 당첨번호
- [x] 당첨번호를 입력받는 기능
- [x] 입력받은 당첨번호의 유효성 체크하는 기능

5. 예외처리
- Lottos 클래스
- [x] (구입 금액 입력 예외) 사용자 입력값이 1,000 단위가 아닐 경우 ERROR 기능
- [x] (구입 금액 입력 예외) 사용자 입력값이 공백일 경우 ERROR 기능
- [x] (구입 금액 입력 예외) 사용자 입력값이 0일 경우 ERROR 기능
- [x] (구입 금액 입력 예외) 사용자 입력값이 숫자가 아닐 경우 ERROR 기능

- WinningNumbers
- [x] (당첨 번호 입력 예외) 1~45의 숫자가 아닐 경우 ERROR 기능
- [x] (당첨 번호 입력 예외) 사용자 입력값이 공백일 경우 ERROR 기능
- [x] (당첨 번호 입력 예외) 사용자 입력값에 중복값이 있을 경우 ERROR 기능
- [x] (당첨 번호 입력 예외) 입력값이 6개가 아닐 경우 ERROR 기능

- BonusNumber
- [x] (보너스 번호 입력 예외) 1~45의 숫자가 아닐 경우 ERROR 기능
- [x] (보너스 번호 입력 예외) 사용자 입력값이 공백일 경우 ERROR 기능
- [x] (보너스 번호 입력 예외) 사용자 입력값이 0일 경우 ERROR 기능
- [x] (보너스 번호 입력 예외) 사용자 입력값이 숫자가 아닐 경우 ERROR 기능

## :file_folder: 패키지 구조 및 파일명
---
- src
  - comm
  - - Message.js
  - - Util.js
  - model
  - - BonusNumber.js
  - - Lottos.js
  - - WinningNumbers.js
  - view
  - - UserView.js
  - App.js
  - index.js
  - Lotto.js
---
- Message.js
- == 사용자 입출력에 대한 상수를 관리하는 파일입니다.
- Util.js
- == 로또 당첨 결과금액, 순위에 대한 상수를 관리하는 파일입니다.
- BonusNumber.js
- == 보너스 번호에 관한 Validation 체크와 생성자를 관리하는 Class입니다.
- Lottos.js
- == 로또 구입 금액에 관한 Validation 체크 및 금액에 따른 로또 랜덤 생성 등을 관리하는 Class입니다.
- WinningNumbers.js
- == 당번 번호에 관한 Validation 체크과 생성자를 관리하는 Class입니다.
- LottoValidate.js
- == 로또에 관한 모든 Validation 함수를 담고있는 Class입니다.
- UserView.js
- == 사용자의 입출력에 관한 모든 함수를 담고있는 Class입니다.
- App.js
- == Controllor의 역할을 하며 로또 프로세스의 전반적인 흐름을 가지고 있는 Class입니다.
- index.js
- == App.js의 play를 실행하는 파일입니다.
- Lotto.js
- == 로또 구입 금액에 따른 로또 번호 생성과 Validation 체크 및 로또의 결과 도출을 위한 Class입니다.

## :computer: 커밋 메세지 컨벤션
---
- Allowed <type>
- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)
---

## 테스트 결과
![로또테스트결과](https://github.com/ParkHanse/javascript-lotto-6/blob/ParkJeeHoon/docs/img/jest_lotto_result.png)

## :high_brightness: 기능 구조
- 로또 게임 기능을 구현해야 한다. 로또 게임은 아래와 같은 규칙으로 진행된다.
- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원
- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 `throw`문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다.

## :key: 추가된 요구 사항
- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
  - 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
- else를 지양한다.
  - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
  - 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLineAsync, Console.print) 로직에 대한 단위 테스트는 제외한다.
  - 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.
  - 단위 테스트 작성이 익숙하지 않다면 `__tests__/LottoTest.js`를 참고하여 학습한 후 테스트를 구현한다.