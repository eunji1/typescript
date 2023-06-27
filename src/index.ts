// import { anyToVoidConsole, stringToTupleConsole } from "./1)types/variableType";

import { interfaceIntroduce, interfaceIntroduceHero } from "./2)interface";


// stringToTupleConsole()

// anyToVoidConsole()

interfaceIntroduce({name:"e", age:20, gender:"female"})
const ironman = {name:"토니 스타크" , age:40, gender:"male", ironSuit:true}
const captinA = {name:"스티브 로저스" , age:40, gender:"male", shild:true}
interfaceIntroduceHero(ironman)
interfaceIntroduceHero(captinA)