- 자바스크립트는 자바와 씨와는 다르게 유연한 코드
- 동적타이핑 (var, let, const) int, char, bol과 같이 타입을 지절할 필요가 업삳.
- 동적타이핑의 타입을 지정하는 코드가 점차 늘어나고 서비스의 무게가 커지면서 문제가 발생하게 되었다.
- 타입스크립트는 자바의 타입지정을 가능하게 하는 슈퍼셋이라 한다.
- JS : 동적 ts는 정적타이핑
- ts는 명시적 타입 정의


## 컴파일 과정
- ts의 3가지 절차(컴파일 번들 디플로이)를 거쳐서 자바스크립트로 변환한다.
- 컴파일: .ts파일을 AST로 변환_추상적 구문트리_
  - scanner로 토큰화 -> parser 트리(AST_Abstract Syntax Tree)
  - typeCheck로 바인더, 타입시스템 -(타입검사실행)
  - 바인더는 AST를 읽오소 영역별로 (identify)로 구분후 어떤 데이터를 쓸지 판별
  - Compoile options: ts-> js 변환하기 위해 필요(tsconfig.json)
  - AST 반환하는 역할은 emitter가 존재 AST.js
  - 번들이 완료되면 자바스크립트로 배포



## setting
```
yarn add typescript
yarn add ts-node
yarn add types/node
yarn init
yarn tsc --init 
```

js에서 ts를 

ts를 js로 변환하는 과정
yarn ts-node src
yarn dev, yarn build