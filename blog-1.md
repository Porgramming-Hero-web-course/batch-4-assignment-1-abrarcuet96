Question: The significance of union and intersection types in Typescript.

Answer:

<!-- Union Type -->

Union Type(|): It indicates a variable which can be of different types.
Ex: let value: number | boolean;

Significances:

1. If an input have different types it can be handled using union type.
2. type narrowing can be done.

<!-- Intersection Type -->

Intersection Type($): It is a combination of multiple types which allows a variable or object to have the all the properties or behavior of the types being inserted.
Ex:
type Person = { name: string, age: number };
type Worker = { jobTitle: string };

let employee: Person & Worker = {
name: "Abrar",
age: 26,
jobTitle: "Next Level Web Developer"
};

Significances:

1. It is used when a value need to satisfy multiple constraints at once.
2. It has the extending functionality.
3. It gives us the facility of creating complex types by combining the exisiting one without creating new objects.
