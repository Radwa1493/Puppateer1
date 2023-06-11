Download libraries 
    Run in terminal Terminal : npm install

    if an error occurce try to delete node_modules and run the bellow command
    Run in terminal Terminal :npm install --save-dev @babel/core@^7.0.0 @babel/preset-env@^7.0.0 babel-jest@^26.0.0 jest@^26.0.0 jest-puppeteer@^5.0.0 puppeteer@^5.4.1 jest-html-reporters@^3.1.4

Project structure 
    Puppateer1/
    ├── tests/      > Test class
        ├── end-to-end.test.js/      > Test class
        
    ├── config.js/        > Test Data class
    ├── jest_html_reporters.html    > HTML report 
    ├── pages
        ├── RegistionPage.js
        ├── ProfilePage.js
        ├── HomePage.js
        ├── CatPage.js



- To change browser from headless mood to head mood change flag "headless "
in (jest-puppeteer.config) to false -> 	headless: false 

Run Project 
    Run in Terminal : npm run test:report
    After run jest_html_reporters.html will created on the project root

Run on docker 
    1)open docker desktop
    2)Run in terminal : docker build -t jest-project .
    3)Run in terminal : docker run --rm jest-project
run on docker not working due to browser initialization 


