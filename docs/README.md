# [3주차] 로또 :money_with_wings:

## :clipboard: 구현할 기능 목록
1. 사용자 입력
    - 로또 구입 금액 입력
    - 당첨 번호 6개 입력 (쉼표","를 기준으로 구분)
    - 보너스 번호 1개 입력

2. 당첨 조건
    - 1등 : 당첨 번호 6개 일치
    - 2등 : 당첨 번호 5개 + 보너스 번호 1개 일치
    - 3등 : 당첨 번호 5개 일치
    - 4등 : 당첨 번호 4개 일치
    - 5등 : 당첨 번호 3개 일치

3. 로또 갯수
    - 로또 1장의 가격은 1,000원

4. 예외 처리
    [ERROR] 금액이 1,000 으로 나누어 떨어지지 않을 경우
    [ERROR] 입력 값이 숫자가 아닌 잘못된 형식인 경우 
    [ERROR] 당첨 번호가 6개가 아닌 경우
    [ERROR] 입력된 당첨 번호 각각이 1부터 45 사이의 숫자가 아닌 경우
    [ERROR] 입력된 당첨 번호가 중복이 있는 경우
    [ERROR] 당첨 번호와 보너스 번호가 중복이 있는 경우

## :heavy_plus_sign: 추가한 기능
- 복권 번호, 보너스 번호 중복 검사
## :airplane: 테스트 결과
- ![로또결과](https://github.com/leedbswo107/javascript-lotto-6/blob/leedbswo107/docs/pass1.png)

- ![로또결과](https://github.com/leedbswo107/javascript-lotto-6/blob/leedbswo107/docs/pass2.png)
## :file_folder: 파일 구조 및 파일명
- :open_file_folder: src 
    - :open_file_folder: common
        - :memo: outputMessage.js
        - :memo: Validate.js
    - :open_file_folder: controller
        - :memo: LottoController.js
    - :memo: App.js
    - :memo: index.js
    - :memo: Lotto.js
    - :memo: LottoPlay.js

## :book: 커밋 컨벤션
- 자주 사용하는 태그 종류
    - feat : 새로운 기능을 추가하는 경우
    - fix : 버그를 고친경우
    - docs : 문서를 수정한 경우
    - style : 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는경우
    - refactor : 코드 리펙토링
    - test : 테스트 코드. 리펙토링 테스트 코드를 추가했을 때
    - chore : 빌드 업무 수정, 패키지 매니저 수정
    - design : CSS 등 사용자가 UI 디자인을 변경했을 때
    - rename : 파일명(or 폴더명) 을 수정한 경우
    - remove : 코드(파일) 의 삭제가 있을 때. "Clean", "Eliminate" 를 사용하기도 함
- 기타 태그 타입들
    - add : 코드나 테스트, 예제, 문서등의 추가 생성이 있는경우
    - Improve : 향상이 있는 경우. 호환성, 검증 기능, 접근성 등이 될수 있습니다.
    - implement : 코드가 추가된 정도보다 더 주목할만한 구현체를 완성시켰을 때
    - move : 코드의 이동이 있는경우
    - updated : 계정이나 버전 업데이트가 있을 때 사용. 주로 코드보다는 문서나, 리소스, 라이브러리등에 사용합니다.
    - comment : 필요한 주석 추가 및 변경

## :warning: 추가된 요구 사항
- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
    - 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
- else를 지양한다.
    - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
    - 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLineAsync, Console.print) 로직에 대한 단위 테스트는 제외한다.
    - 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.
    - 단위 테스트 작성이 익숙하지 않다면 __tests__/LottoTest.js를 참고하여 학습한 후 테스트를 구현한다.
