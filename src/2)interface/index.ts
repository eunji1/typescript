
// 인라인으로 인터페이스 구현
const human = {name:"eunji", age:20, gender:"female", info:'girl'}

export const interfaceIntroduce = (humanObj:{name:string, age:number, gender:string}) =>{
    const {name, age, gender} = humanObj
    console.log(name, age, gender)
}

// 인터페이스 추출

interface CHECK_HUMAN {
    name:string,
    age:number,
    gender:string,
}

export const interfaceIntroduce2 = (humanObj: CHECK_HUMAN) =>{
    const {name, age, gender} = humanObj
    console.log(name, age, gender)
}

interface CHECK_HERO {
    name:string;
    age:number;
    gender:string;
    ironSuit?: boolean;
    shild?:boolean;
}

const ironman = {name:"토니 스타크" , age:40, gender:"male", ironSuit:true}
const captinA = {name:"스티브 로저스" , age:40, gender:"male", shild:true}

export const interfaceIntroduceHero = (humanObj: CHECK_HERO) =>{
    const {name, age, gender} = humanObj
    console.log(name, age, gender)
}

interface CHECK_HERO2 {
    name:string;
    age:number;
    gender:string;
    readonly ironSuit?: boolean;
    readonly shild?:boolean;
}
// readonly는 재할당이 불가
// const ironman : CHECK_HERO2 = {name:"토니", age:3, gender:"male", ironSuit:true}
// ironman.ironSuit = false; // readonly로 인해 에러


// export const interfaceIntroduce3 = (humanObj: CHECK_HUMAN):{ironSuit:boolean, shild:boolean} =>{
//     const {name, age, gender} = humanObj
//     console.log(name, age, gender)
// }

interface CHECK_HELLOWORLD {
     (name:string) :string
}

const helloWorld :CHECK_HELLOWORLD =(name:string) =>{
    return `${name} hello world`
}

interface DIARY {
    currDate : string
}
// 클래스에 필요한 내용 지정

interface MONTHDIARY extends DIARY {
    todos:string[];
}
class monthDiary implements MONTHDIARY{
    currDate: string = '2022-05-05'
    todos:string[]; ['12']
}