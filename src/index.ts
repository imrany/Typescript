//1. basic types
let id: number=5
let firstName: string= "imran"

let isStudent: boolean
isStudent=false
let letter: any ="a" //"any" allows the variable value to be any type
let arr: number[]
arr=[1,2,3,4]

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

//4. union
//this enable you to assign a more the one type to a variable by specifying the types
let userInfo: number | string 
userInfo="Imran"
userInfo=6

let arrInfo: number[] | string[]
arrInfo=[2,3,4]
arrInfo=["imran", "matano"]

//5. tuple
let person: [number, boolean, string]
person=[2, true, "imran"]