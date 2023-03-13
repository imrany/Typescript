//1. basic types
let id: number=5
let firstName: string= "imran"

let isStudent: boolean
isStudent=false
//"any" allows the variable value to be any type
let letter: any ="a" 

//2. type in objects
type detailtype={
    id: number
    name: string
    single: boolean
    desc?: string //by adding a "?" makes the property optional
}

const user:detailtype={
    id:1,
    name:"Imran",
    single:true,
    desc:"Hello there"
}

//3. interface with objects
interface userDetailsInterface {
    id: number
    name: string
    student: boolean
}
const userDetails: userDetailsInterface={
    id:2,
    name:"matano",
    student:true
}

