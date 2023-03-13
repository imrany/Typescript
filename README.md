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
Create a new project and create an `index.ts` file and follow through my commits,
You can fork this repo and clone it to your machine after following the steps above.
```bash 
git clone https://github.com/imrany/Typescript.git
```
After cloning you can log the commit using
```bash
git log --oneline
```
You will see every commits that was made, from the initial commit to the latest commit.
To see what i did on a specific commit you can checkout from the main branch to that commit, like this
```bash 
git checkout <commentID>
```
you will get commentID when you run `git log --oneline`.


You should create a `dist` folder in the root directory
in `dist` is where the javascript compile from the typescript in `src` folder will stay.
