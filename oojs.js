class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    distance(otherPoint) {
      const dx = this.x - otherPoint.x;
      const dy = this.y - otherPoint.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  
    getCoordinates() {
      return `(${this.x}, ${this.y})`;
    }
  }
  
  class Circle extends Point {
    constructor(x, y, radius) {
      super(x, y);
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  
    circumference() {
      return 2 * Math.PI * this.radius; 
    }
  
    isInside(point) {
      const distanceToCenter = this.distance(point);
      return distanceToCenter <= this.radius;
    }
  }
  
  const point1 = new Point(1, 2);
  const point2 = new Point(4, 6);
  const distance = point1.distance(point2);
  console.log(`A pontok távolsága: ${distance}`);
  
  const circle = new Circle(0, 0, 5);
  const circleArea = circle.area();
  console.log(`A kör területe: ${circleArea}`);
  
  const circleCircumference = circle.circumference();
  console.log(`A kör kerülete: ${circleCircumference}`);
  
  const isInside = circle.isInside(point1);
  console.log(`A pont a körön belül van-e: ${isInside}`);
  
  const outputDiv = document.createElement('div');
  outputDiv.innerHTML = `
    <p>Pontok: ${point1.getCoordinates()} és ${point2.getCoordinates()}</p>
    <p>Távolság: ${distance.toFixed(2)}</p>
    <p>Kör területe: ${circleArea.toFixed(2)}</p>
    <p>Kör kerülete: ${circleCircumference.toFixed(2)}</p>
    <p>A pont a körön belül van-e: ${isInside}</p>
  `;
  document.body.appendChild(outputDiv);