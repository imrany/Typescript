# Learnt typescript
Typescript is a superset of javascript, it is static typed while javascript is dynamically typed. Meaning 
in typescript you can defined a variable's datatype hence making it strictly to that datatype, while in javascript is not a must to define the variable's datatype because javascript will know if a variable is a string or a number.

example:
in Typescript:
```typescript
let name: string="imran"

```
in javascript:
```javascript
let name ="imran";
```
Typescript must be compiled to javascript since the browser cannot understand typescript.
Typescript support static type this prevent errors

## Starter
To start with typescript. you have to install typescript via npm or yarn, globally ro locally on your project.
```bash
npm install -g typescript
```
Check the version
```bash
tsc -v
```
Create a new project and create an `index.ts` file.
