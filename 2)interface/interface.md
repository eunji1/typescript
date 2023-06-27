# interface

- 변수, 함수, 클래스 타입 체크를 위해 사용된다.
- 여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의
- 인터페이스에 선언된 프로퍼티 또는 메소드의 구현을 강제하거나 일관성있게 유지하기 위해


# 인터페이스 적용

```ts
export const interfaceIntroduce = (humanObj:{name:string, age:number, gender:string}) =>{
    const {name, age, gender} = humanObj
    console.log(name, age, gender)
}
const human = {name:"eunji", age:20, gender:"female", info:'girl'}
```
- human 객체의 타입을 판별하기 위해서 `humanObj`는 `name, age, gender`가 있는지 체크 

```ts
interface CHECK_HUMAN {
    name:string,
    age:number,
    gender:string,
    ironSuit?:boolean
    readonly suit?:boolean
}
```
- 확장성과 유지보수
- 선택적으로 프로퍼티를 받을 수도 있음

- 프로퍼티의 수정 불가 옵션은 readonly를 붙여준다.