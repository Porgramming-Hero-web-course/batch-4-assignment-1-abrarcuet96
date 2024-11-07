{
  const getProperty = <T, K extends keyof T>(
    propertyObj: T,
    propertyValue: K
  ): T[K] => {
    return propertyObj[propertyValue];
  };
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "age"));
}
