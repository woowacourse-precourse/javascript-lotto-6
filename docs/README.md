<div align="center">
  
# [정리] 로또 :slot_machine:
<br>

본 문서는 우테코 6기 [**3주차 미션 - 자동차 경주**](https://github.com/woowacourse-precourse/javascript-lotto-6)의 구현에 대한 정리입니다.<br>
:black_nib: 구현 결과, :bricks: 디렉토리 구조, :books: 구현 기록 에 대한 간략한 설명을 포함하고 있습니다.

<br>

<div>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
</div>

<br>

본 구현은 외부 라이브러리 없이 순수 Vanilla JS를 통해서만 구현했습니다.<br>
또한 `Node.js` 버전 `18.17.1` 이상의 실행환경이 필요합니다 😏

</div>

<br>

## :black_nib: 구현 결과

<br>

### :hammer: 기능 명세

1. 로또를 구입할 금액을 입력받는다.

   ✦ 로또 1장의 가격은 1000원이다.

<br>

2. 당첨 번호와 보너스 번호를 입력 받는다. :sparkles:

<br>

3. 로또를 발행한다.

   ✦ 6개의 숫자로 이루어진다.<br>
   ✦ 1~45까지의 숫자 중 중복되지 않게 뽑는다.<br>
   ✦ 중복되지 않는 보너스 숫자를 한개 뽑는다.

<br>

4. 결과를 출력한다.

   ✦ 발행한 로또들을 **오름차순**으로 출력한다. :arrow_upper_right:<br>
   ✦ 당첨 내역을 출력한다. 당첨 규칙은 다음과 같다.<br>

   ```
   - 1등: 6개 번호 일치 / 2,000,000,000원
   - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
   - 3등: 5개 번호 일치 / 1,500,000원
   - 4등: 4개 번호 일치 / 50,000원
   - 5등: 3개 번호 일치 / 5,000원
   ```

   ✦ 수익률을 소수점 둘째 자리에서 반올림하여 출력한다.

<br>

### :bug: 예외 처리

1. 예외가 발생하는 경우

   ✦ `"[Error]"`로 시작하는 문구를 가진 에러를 발생시킨다.<br>
   ✦ 해당 부분부터 입력을 다시 받는다. :warning:

<br>

2. 예외 발생 경우는 다음과 같다.

   ✦ 구입 금액이 1000원으로 나누어 떨어지지 않는 경우

<br>

### :warning: 주의사항

1. `package.json`을 변경해서는 안된다.
2. 프로그램 종료 시 `process.exit()`을 호출하지 않는다.
3. indent depth가 3이 넘지 않도록 구현한다.
4. Jest를 이용하여 본인이 정리한 기능 목록이 정상 작동함을 테스트한다.
5. 함수(메소드)의 길이가 15라인이 넘지 안도록 한다.
6. else를 지양한다.
7. 제공된 `Lotto` 클래스를 활용하며 필드 추가는 불가능하다.