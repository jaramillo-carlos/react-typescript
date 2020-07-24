# React (Typescript)
- `npx create-react-app app-name --typescript`
- `npm run eject`

# Typescript
Typed superset of javascript. Open source. Supported and developed by microsoft, have generics and interfaces. Transpile code to JS. We can type explicitly and inferred

- `npm install -g typescript`
- `tsc -v`
- `tsc --watch file.ts`
- `npx tsc`

## Config file
`tsc --init` will create a config file: `tsconfig.json`

`tsc` search config
`tsc --project folderName` select folder that contain config file
`tsc file.ts` ignore config file


```javascript
function helloWorld(name) {
  const hello = 'hello';
  const world = 'world';
  return hello + world + name;
}
```
```typescript
function helloWorld(name:string): string {
  const hello: string = 'hello';
  const world: string = 'world'; // explicitly typed (:)
  const xd = 'world'; // inferred typed (require initialize variable)
  return hello + world + name;
}
```

## Basic Types
Number, Boolean, String, Array, Tuple, Enum, Any, Void, Null, Undefined, Never, Object.

### Optional
- `?`
- `?: number`

### string
Can use `""` or since ES6-ecma2015 ` `` `
- `:string`

### number
**Numeric** (integer and floats), since ES6-ecma2015 (**hexadecimal** (0x0-9A-F), **binary** (0-1b), **octal** (0o0-7))
- `:number`

### boolean
- `:boolean`

### any
When have dynamic values, or the value can change in the flow
- `:any`

### void
Opposite of any, usualy used to type function  when not have return. Can recibe **null** or **undefined** (except in **strict** typing)
- `:void`

### never
Represents functions that throw (propagates) exceptions or never return a valid value
- `:never`

### undefined
subtype of all types, you can use **undefined** in a **string**, or any variable when you dont are in strict mode. When use `--strictNullChecks`, cant assign **undefined** to variable
- `:undefined`

### null
subtype of all types, you can use **null** in a **string**, or any variable when you dont are in strict mode. When use `--strictNullChecks`, cant assign **null** to variable
- `:null`

### object
object(TStype) is different to Object(claseJS)
- `:object`
- `: { id:number }`

### Array
`<>` This symbol are called **Generics**
- `:Array<number>`
- `:number[]`

### tuple
- `:[number, string]` // tuple
- `:[number, number]` // tuple
- `:[number, number][]` // Tuple Array

### enum
```typescript
// without enum
const landscape = 0;
const portrait = 1;

enum PhotoOrientation {
  // Other = 10, // if you initialize first value, the others will be this + 1, in tis case landscape will be 11
  Landscape, // 0 // per default the first value will be 0
  Portrait, // 1
  Square,
  Panorama,
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape; // 0
PhotoOrientation[Landscape]; // 'Landscape'

enum FelType {
  Invoice = 'Invoice',
  SpecialInvoice = 'SpecialInvoice'
}
```

## Union (OR)
- `: void | number`

## Type Alias
```typescript
type Hour = number | string;
let hour: Hour = 1;
let hourS: Hour = '1';
```

## Literal Types
```typescript
type SquareSize= '100x100' | '500x500' | '1000x1000';
let smallPicture: SquareSize = '100x100';
let smallPicture: SquareSize = '200x200'; // Error
```

## type assertion
It is different from the **cast** of other languages, because here **TS** does not verify the type, so it does not affect da performance (execution time). `<> // angle bracket syntax` and `as`
```typescript
let username: any;
username = 'Carlos';
let message: string = (username) // error, because username is any
let message: string = (<string>username) // error, because username is any
let message: string = (username as string) // error, because username is any
```

## Cast
```typescript
  Number('xd'); // But they can return NaN (not a number)
```

## funcion
```typescript
function createPicture(title: string, size?: number): number {
  return title.length
}
```

## Interfaces
```typescript
interface Person {
  readonly id: number; // mark as 'solo lectura', cant be assigned with person.id = 2, only person = {id: 2}
  firstName: string;
  lastName: string;
  age?: number;
}
function formatObject(person: Person) {
}

// you can extend other interfaces.
interface Engineer extends Person {
  // will have all attributes of person
}
```

## Class
```typescript
class Animal {
  name: string;
  constructor(name:string) {
    this.name = name;
  }
  move(distance: string | number = 10) {
    console.log("Moviendo animal " + distance + "metros");
  }
}

const dog = new Aniaml('max');

console.log(dog);
console.log(dog.name);
console.log(dog.move);
console.log(dog.move(1));
```


## Abstract class
Superclass, that you dont need create instances, usually used only for hierarchy. The dicerence with interface is abstract class, can implement functions for the instances.
```typescript
abstract class Id {
  protected id: number;
  public static idk?: string; // you cant acces to this without istance Id.idk
}
```

## Hierarchy
```typescript
class Bear extends Animal {
  constructor(name: string, kind?: string) {
    super(name); // super call the constructor of father (Animal)
  }

  // if this function (move) doesnt exist, call the move of father
  move(distance: number = 20) {
    super.move(distance)
  }
}
```

## Access modifiers
You can modify private attributes, with  **accessor methods**: `set` and `get`
```typescript
class Animal {
  _id?: string; // per default are public
  public name: string;
  private age: number; // only can used inside a this class. // You can acces this in runtime.
  #newAge?: number; // since typescript 3.8. - Is bethern then private, because encapsulates private members
  protected zone: string; // only can used inside a this class and subclass (Hierarchy) but not in instances

  constructor(name:string, age?: number, zone?: string) {
    this.name = name;
    this.age = age;
    this.zone = zone;
  }

/* Accessor methods */
  get id() {
    return this._id
  }
  set id(id: number) {
    this._id = id;
  }

  move(distance: string | number = 10) {
    console.log("Moviendo animal " + distance + "metros");
  }
}

class Bear extends Animal {
  food: string;
  constructor(name: string, age?: number, zone?: string, food?: string) {
    super(name, age, zone); // super call the constructor of father (Animal)
    this.food = food;
  }

  move(distance: number = 20) {
    console.log("Oso walking in ", this.zone) // can get the zone, because is protected
    super.move(distance)
  }
}

let bearOne = new Bear('Josh', 10, 'Canada', 'Fish');
console.log(bearOne);
console.log(bearOne.name);
console.log(bearOne.age); // not will work
console.log(bearOne.zone); // not will work
```


# Module resolution strategie
`moduleResolution` and `traceResolution`
**classic:** AMD Modules, System, ES2015. it is less configurable
```typescript
// RELATIVE IMPORT
// archivo: /ts/photo/main.ts
import {Picture} from './picture';

// /ts/photo/picture.ts
// /ts/photo/picture.d.ts


// NO-RELATIVE IMPORT
// archivo: /ts/photo/main.ts
import {Picture} from 'picture';

// /ts/photo/picture.ts
// /ts/photo/picture.d.ts

// typescript/picture.ts
// typescript/picture.d.ts
// (continua buscando en el árbol de directorios)
```
**node**: CommonJS modules, or UMD. Have más configuration options
```typescript
// RELATIVE IMPORT
// archivo: /ts/photo/main.ts
import {Picture} from './picture';

// /ts/photo/picture.ts
// /ts/photo/picture.tsx
// /ts/photo/picture.d.ts

// /ts/photo/picture/package.json ("typings")
// /ts/photo/index.ts
// /ts/photo/index.tsx
// /ts/photo/index.d.ts

// NO-RELATIVE IMPORT
// archivo: /ts/photo/main.ts
import {Picture} from 'picture';

// /ts/photo/node_modules/picture.ts
// /ts/photo/node_modules/picture.tsx
// /ts/photo/node_modules/picture.d.ts
// /ts/photo/node_modules/picture/package.json
// /ts/photo/node_modules/index.ts

// /ts/node_modules/picture.ts
// /ts/node_modules/picture.tsx
// /ts/node_modules/picture.d.ts
// /ts/node_modules/index.ts
// /ts/node_modules/index.tsx
// /ts/node_modules/index.d.ts

```
``
-----

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
