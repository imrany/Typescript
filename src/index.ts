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
//type
type score=number|string
let grade:score
grade="A"
grade=450
console.log(grade)

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
console.log(userDetails)

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

let employer: [number, string][]
employer=[
    [1,"imran"],
    [2,"matano"]
]

//6. enum enumerated typesindex.ts
enum Names{
    firstName="imran",
    middleName="matano",
    lastName="ngati"
}
console.log(`My name is ${Names.firstName} ${Names.middleName} ${Names.lastName}`)

//7.Type assertions
let userId:any =1
let employerId=<number>userId //means that you want employerId to be as the userId but you've specified its type
console.log(employerId)

//8. functions with types
function sum(x: number, y:number): number{
    return y+x
}
console.log(sum(3,4)) //output 7
// void function
function logMessage(message: string | number): void{
    console.log(message)
}
logMessage("Hello friend")
logMessage(24)

//9. classes
class person{
  id: number
  name: string

  constructor(id:number, name: string){
    this.id=id
    this.name=name
  }
}
//creating an object called imran from person class
const imran =new person(1,"imran")
console.log(imran)

//10. generics
