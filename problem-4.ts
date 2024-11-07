{
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (areaShape: Shape): number => {
    if (areaShape.shape === "circle") {
      return parseFloat(
        (Math.PI * areaShape.radius * areaShape.radius).toFixed(2)
      );
    } else if (areaShape.shape === "rectangle") {
      return parseFloat((areaShape.width * areaShape.height).toFixed(2));
    } else {
      return 0;
    }
  };
  // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  // console.log(circleArea);

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);
}
