
// Boolean

const isDone:boolean = false;

// Number

const decimal:number = 6;

const hex :number = 0xf00d;

const binary :number =  0b1010;

const octal :number = 0o744;



// string
const color :string = 'blue';

const introduce :string = `my name is eunji. I like ${color}` + 25 + `age`;

// array

const numberArr : number[] = [1,2,3]
const stringArr : string[] = ['1','2','3']
const booleanArr : boolean[] = [true, false, true];

// 튜플 (타입의 개수가 고정된 배열)
const tuple : [string, number] =['1',2];

tuple[0] ='2';
tuple[1] =3;

// Enum (집합)

enum EnumColor {Red, Green, Blue};   //{0,1,2}

const myShirts :EnumColor = EnumColor.Red;
// const myShirts :EnumColor = 1;

// const myShirts :EnumColor = 1;

enum EnumColor2 {Red=2, Green, Blue};   //{2,3,4}

enum EnumColor3 {Red=1, Green=2, Blue=4};   //{1,2,4}

const myShirtsColor : string = EnumColor[0]; //Red


export const stringToTupleConsole = () =>{
    console.log("string 테스트",introduce)
    console.log("array 테스트", numberArr, stringArr, booleanArr)
    console.log("tuple 테스트", tuple)
    console.log("Enum 테스트", myShirts,myShirtsColor)
}


// Any 권고하지 않음, 모르는 어떤 값들에 사용

let anyVariable : any = 4;

anyVariable = 'string';

anyVariable = true;


const list : any[] = [1, true, 'free'];

// null, undefined

let u : undefined = undefined

let n : null = null;

// void

export const anyToVoidConsole = () :void =>{
    console.log("any 테스트: ", anyVariable)
    console.log("null 테스트: ", n)
    console.log("undefined 테스트: ", u)
}

// never

export const infiniteLoop = () :never =>{
    while(true){
        console.log("무한루프")
    }
}
// 절대 리턴값이 없음

const myError= (msg:string) :never=>{
    throw new Error(msg);
}

export const error = () :never=>{
    return myError("에러발생");
}

// object
