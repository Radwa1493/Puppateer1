This framework has 3 scenarios
Before all 
1-	navigate to  https://www.moebel-kraa.de/ 
2-	close cookies

1-	scenario 1 : Registration Test
2-	Open Profile Page
3-	open Registration page
4-	fill new user Data using data generation functions 
5-	Then logout

scenario 2 : Login Test
1-	Login with valid email and Invalid password
2-	Login valid credentials created from Registration scenario

scenario 3: shoping Test
1-	Open Category page
2-	Select random Category
3-	Select 5 random Items add them in cart and calculate their price as Expected price and save their names in array 
4-	Open cart page and validate on Actual price and Items names 

............................................................................


Download libraries 
    Run in terminal Terminal : npm install

    if an error occurce try to delete node_modules and run the bellow command
    Run in terminal Terminal :npm install --save-dev @babel/core@^7.0.0 @babel/preset-env@^7.0.0 babel-jest@^26.0.0 jest@^26.0.0 jest-puppeteer@^5.0.0 puppeteer@^5.4.1 jest-html-reporters@^3.1.4

Project structure 
    Puppateer1/
    ├── tests/      > Test class
        ├── end-to-end.test.js/      > Test class
            ├──Test suite for user Registration	
            ├──Test suite for Login	> inalied and valid
            ├──Test suite for shopping -> select randam 5 item from randam category and add them in wishlist , display items name and total expected price
    ├── config.js/        > Test Data class
    ├── html-reports    
        ├──jest_html_reporters.html      > HTML report 
    ├── pages
        ├── RegistionPage.js
        ├── ProfilePage.js
        ├── HomePage.js
        ├── CatPage.js
        ├── Base.js
    ├── ScreenShot



- To change browser from headless mood to head mood change flag "headless "
in (jest-puppeteer.config) to false -> 	headless: false 

Run Project 
    Run in Terminal : npm run test
    After run report created in ->  html-reports\jest_html_reporters.html 
    After run report created in ->  html-reports\jest_html_reporters.html 


Run on docker 
    1)open docker desktop
    2)Run in terminal : docker build -t jest-project .
    3)Run in terminal : docker run --rm jest-project
run on docker not working due to browser initialization 


