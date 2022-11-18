# Currency Exchanger
### A project by Aitana Shough

Currency Exchanger is a web application that uses a third party API and JavaScript to convert USD to 7+ different currencies.

## Technologies Used

* JavaScript, Node.js
* HTML / CSS
* webpack
* Bootstrap
* ES Lint
* Babel
* Dotenv

## Setup/Installation Requirements

To view this application, it must be cloned to your personal machine.

**You will need:**
* A code editor, such as VS Code
* Git. Installation instructions vary depending on your OS, so please check [this page on installing Git](https://github.com/git-guides/install-git)
* An API key (see below)

### You will need an **API Key** from [ExchangeRate-API](https://www.exchangerate-api.com/).
Instructions to get your personal key are as follows:
1. Navigate to the main ExchangeRate-API page by clicking the link above or by copy and pasting `https://www.exchangerate-api.com/` in your browser's address bar.
2. Enter your e-mail address and click **"Get Free Key!"**. *Make sure to keep this private!*
3. Finish creating your account. Your key should now be ready to use.

### Then, clone this repository by pasting the following command into your terminal:
```
git clone https://github.com/aitanas/currency-exchanger.git
```
**Directions after cloning are as follows:**
1. Open the **currecy-exchanger** directory.
2. Within the root directory, create a file named **.env**. This is where your personal API key will be stored. 
Type the following into your .env file, making sure to replace {YOUR-KEY-HERE} with the key from ExchangeRate-API:
```
API_KEY={YOUR-KEY-HERE}
```
3. Save the .env file and navigate back to the root directory using your terminal.
4. Install all Node packages and dependencies with the command `npm install`.
5. Package and open the project in your browser using `npm run start`.
6. Enjoy!

## Known Bugs

* None at this time. 

## License

**MIT License**

Copyright (c) 2022 Aitana Shough

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
