Pre-requisites:
NodeJS latest version
Visual Studio Code latest version

Setup:
Open Visual studio code
Using File menu open the <Automation folder> using the "open folder" option
Using Terminal menu, open"New Terminal"
In the terminal command line, type following and hit ENTER key
npm install

Execute:
To run scripts, in the terminal command line, type following and hit ENTER key
npm run test -- --env TAGS="@<tagname>"

example:
1. To run specific tag -> npm run test -- --env TAGS="@datatable"
2. To run all scenarios -> npm run test

Report:
After execution is completed in the terminal command line, type following and hit ENTER key. HTML report will open in browser
npm run report