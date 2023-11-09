## 기능 그룹 (MVC)

* Models
    - [x] 구매자 정보 `class`
        - [x] 구입 금액 (필드)
        - [x] 로또 개수 (필드)
        - [x] 소유한 로또 번호 목록 (필드)
        - [x] 로또 구입금액 `예외처리`
        - [x] 소유한 로또 번호 목록 `예외처리`
    - [x] 로또 정보 (보너스 번호 포함) `class`
        - [x] 로또 객체: Lotto 클래스 (필드)
          - [x] 당첨 번호 목록 (필드)
          - [x] 로또 당첨 번호 `예외처리`
        - [x] 보너스 번호 (필드)
        - [x] 보너스 번호 `예외처리`


* Views
    - [x] 입력창 및 메세지 출력 `class`
        - [x] 구입금액 입력
        - [x] 당첨번호 입력
        - [x] 보너스번호 입력
    - [x] 출력창 및 메세지 출력 `class`
        - [x] 로또 개수
        - [x] 번호 목록 출력
        - [x] 에러 메세지 출력
        - [x] 당첨 통계 출력: 제목, 내역, 결과(수익률)


* Controllers
    - [x] 로또 게임 처리/연산 `class`
        - [x] 구매자가 소유할 로또 번호 목록 생성
        - [x] 당첨 내역 연산
        - [x] 당첨 결과(수익률) 연산

<br/>

## 예외 처리
* 로또 구입 금액
  - [x] 공백이 있을 경우
  - [x] 숫자가 아닐 경우
  - [x] 0원 이하일 경우
  - [x] 1000원 단위가 아닐 경우


* 사용자 로또 번호 목록
    - [x] 숫자가 아닐 경우
    - [x] 1~45 사이의 숫자가 아닐 경우
    - [x] 소수점이 있을 경우
    - [x] 중복된 숫자가 있을 경우
    - [x] 6개가 아닐 경우
    - [x] 오름차순이 아닐 경우


* 로또 당첨 번호
  - [x] 숫자가 아닐 경우
  - [x] 1~45 사이의 숫자가 아닐 경우
  - [x] 소수점이 있을 경우
  - [x] 중복된 숫자가 있을 경우
  - [x] 6개가 아닐 경우


* 보너스 번호
  - [x] 공백이 있을 경우
  - [x] 숫자가 아닐 경우
  - [x] 1~45 사이의 숫자가 아닐 경우
  - [x] 소수점이 있을 경우
  - [x] 당첨 번호와 중복될 경우

<br/>

## 테스트 목록
* 구입 금액 테스트
  - [x] 공백이 없는지
  - [x] 숫자가 맞는지
  - [x] 0원 보다 큰 금액인지
  - [x] 1000원 단위인지


* 사용자 로또 번호 목록 테스트
    - [x] 숫자가 맞는지
    - [x] 1~45 사이의 숫자가 맞는지
    - [x] 소수점이 없는지
    - [x] 중복된 숫자가 없는지
    - [x] 6개인지
    - [x] 오름차순으로 정렬되어 있는지
    - [x] 랜덤으로 생성되는지


* 당첨 번호 테스트
    - [x] 숫자가 맞는지
    - [x] 1~45 사이의 숫자가 맞는지
    - [x] 소수점이 없는지
    - [x] 중복된 숫자가 없는지
    - [x] 6개인지


* 보너스 번호 테스트
    - [x] 공백이 없는지
    - [x] 숫자가 맞는지
    - [x] 1~45 사이의 숫자가 맞는지
    - [x] 소수점이 없는지
    - [x] 당첨 번호와 중복되지 않는지


* 로또 개수 테스트
    - [x] 3개 일치 여부가 맞는지
    - [x] 4개 일치 여부가 맞는지
    - [x] 5개 일치 여부가 맞는지
    - [x] 5개 일치 + 보너스 번호 일치 여부가 맞는지
    - [x] 6개 일치 여부가 맞는지


* 수익률 테스트
    - [x] 수익률 연산이 맞는지


<br/>

## 코드 스타일 및 브랜치 전략
* 코드 스타일
    - <details>
      <summary>eslint(airbnb style) 사용</summary>

      `npm init @eslint/config` 로 eslint를 설치한다.

      `npx install-peerdeps --dev eslint-config-airbnb` 로 airbnb eslint 설정 패키지를 설치한다.

      .eslintrc.cjs 파일을 생성하여 코드 스타일을 정의한다.

      test 코드를 위해 `jest : true` 를 기입한다.
  </details>

    - <details>
      <summary>prettier 사용</summary>

      `npm i -D prettier eslint-config-prettier` 로 prettier와 eslint-config-prettier를 설치한다.

      > `eslint-config-prettier`: prettier와 겹치는 eslint 룰을 비활성화한다.

      .eslintrc.cjs의 `extends : [...]` 에 `prettier` 를 추가한다.

      .prettierrc.cjs 파일을 생성한 후 prettier 규칙을 추가한다.
  </details>

    - <details>
      <summary>JSDoc 작성</summary>

      클래스, 함수, 변수의 문서화 및 타입을 명확히 하기 위해 JSDoc을 작성한다.

      ```js
      /**
       * 두 숫자의 합을 연산하는 함수
       * @param {number} a
       * @param {number} b
       * @returns {number}
       */
      function sum(a, b) {
        return a + b;
      }
      ```
  </details>


* 브랜치 전략
    - Git Flow 전략을 기본으로 사용하되 아래의 사항을 지킨다.
    - 최종 브랜치는 'jinmidnight01' 이다.
    - 주 작업 브랜치는 'develop'이다.
    - 필요시 MVC를 기준으로, 기능 그룹 'feature/{feature}' 브랜치를 생성하여 작업한다.
    - 특정 기능 그룹이 완성되면 'develop' 브랜치에 병합한다.
    - 애플리케이션이 완성되면 'develop' 브랜치를 최종 브랜치에 병합한다.