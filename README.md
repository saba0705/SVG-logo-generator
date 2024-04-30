SVG logo Generator Challenge
This Challenge helps us build an application to prompt the user with questions to generate a SVG logo, testing them and save the generated logo to the examples folder. 

Table of Contents

* Description
* Elements
* Installation
* Usage
* Test
* License

Challenge Elements

User Story

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

Installation Instructions

* Enter git clone git@github.com:saba0705/SVG-logo-generator.git to clone the repository.
* Install dependencies by running npm install.

Usage Instructions

* Run the application by executing node index.js.
* Follow the prompts to input information about your logo (text, text color, shape, and shape color).
* Once you've completed all the prompts, the application will generate a logo based on your inputs and save it as  logo.  svg.

Test Instructions

* Enter npm test into your command line.
* This will run the setcolor.test.js, shapes.test.js, and svg.test.jsfiles.
* After the tests have been run, the results will be printed to the command line.



To view a video :

* Walkthough video link "https://app.screencastify.com/v3/watch/iDlOitkSTnQoSPydCBKc"
 
