const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square, } = require('./lib/shapes');




// Prompt the user for input using Inquirer
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter up to three characters.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a logo shape (Triangle, Circle, Square):',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    const { text, textColor, shapeType, shapeColor } = answers;
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
  
   
  
  const svgContent =`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="50%" y="50%" fill="${textColor}" font-size="24" text-anchor="middle">${text}</text>
    </svg>
  `;

  fs.writeFile(`example/logo-${shapeType}.svg`, svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}

);