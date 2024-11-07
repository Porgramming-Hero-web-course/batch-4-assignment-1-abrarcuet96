{
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}
    getCarAge() {
      const currentYear = new Date().getFullYear();
      if (currentYear > this.year) {
        return currentYear - this.year;
      }
      return "Wrong Year";
    }
  }
  const car = new Car("Honda", "Civic", 2000);
  console.log(car.getCarAge());
}
