const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('render() method should return correct SVG string with color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('render() method should return correct SVG string with color', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });
});

describe('Square', () => {
  test('render() method should return correct SVG string with color', () => {
    const square = new Square();
    square.setColor('red');
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
  });
});