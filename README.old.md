# Typescript
Supported and developed by microsoft, have generics and interfaces. Transpile code to JS.

- `npm install -g typescript`
- `npx tsc`


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
  const world: string = 'world';
  return hello + world + name;
}
```

## Basic Types
### Optional
- `?`
- `?: number`

### Array
- `:Array<number>`
- `:number[]`
- `:[number, number]`

### string
- `:string`

### number
- `:number`

### object
- `:object`
- `: { id:number }`

### boolean
- `:boolean`

### enum

### tuple

### any
- `:any`

### void
- `:void`

### undefined
- `:undefined`

### null
- `:null`

## OR
- `: void | number`

## Interfaces
```typescript
interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age?: number;
}
function formatObject(person: Person) {
}
```

## Cast
```typescript
  Number('xd'); // But they can return NaN (not a number)
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
```typescript
class Animal {
  public name: string;
  private age: number; // only can used inside a this class.
  protected zone: string; // only can used inside a this class and subclass (Hierarchy) but not in instances

  constructor(name:string, age?: number, zone?: string) {
    this.name = name;
    this.age = age;
    this.zone = zone;
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


# React (Typescript)
- `npx create-react-app app-name --typescript`