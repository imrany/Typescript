//basic types
let id: number=5
let firstName: string= "imran"

let isStudent: boolean
isStudent=false
//"any" allows the variable value to be any type
let letter: any ="a" 

//type in objects
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