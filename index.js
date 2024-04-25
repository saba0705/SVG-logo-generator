const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to generate the SVG logo based on user input
function generateLogo(text, textColor, shapeType, shapeColor) {
  let shape;
  switch (shapeType) {
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Circle':
      shape = new Circle();
      break;
    case 'Square':
      shape = new Square();
      break;
    default:
      console.log('Invalid shape type.');
      return;
  }

  shape.setColor(shapeColor);

  const svgContent = `
    <svg width="300" height="200">
      ${shape.render()}
      <text x="50%" y="50%" fill="${textColor}" font-size="24" text-anchor="middle">${text}</text>
    </svg>
  `;

  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}

// Prompt the user for input using Inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape (Triangle, Circle, Square):',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
    },
  ])
  .then((answers) => {
    const { text, textColor, shapeType, shapeColor } = answers;
    generateLogo(text, textColor, shapeType, shapeColor);
  })
  .catch((error) => {
    console.log('Error:', error);
  });