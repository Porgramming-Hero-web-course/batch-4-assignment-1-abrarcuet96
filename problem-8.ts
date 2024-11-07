{
  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    const objects = Object.keys(obj) as (keyof T)[];
    const keyIncluded = keys.map((k) => objects.includes(k));
    if (keyIncluded.includes(false)) {
      return false;
    } else {
      return true;
    }
  };
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
}
