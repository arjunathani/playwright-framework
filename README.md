# Playwright Automation Framework (UI + API)

## Project Description
This project contains a **Playwright automation framework** built using **JavaScript (Node.js)** to automate:

- **UI testing** for [DemoQA – Book Store Application](https://demoqa.com/)  
- **API testing** for [ReqRes APIs](https://reqres.in/api)  
- **Cross-browser testing** (Chromium, Firefox, WebKit)   

The framework is designed with **reusability, maintainability, and easy execution** in mind.

---

## Tech Stack
- **Playwright**  
- **JavaScript (Node.js)**  
- **Page Object Model (POM)**  
- **Playwright API Testing**  

---

## Project Structure

playwright-framework/
│
├── src/
│ ├── locators/ # All UI locators (separate & reusable)
│ ├── pages/ # Page actions using POM
│ ├── tests/
│ │ ├── ui/ # UI test cases
│ │ └── api/ # API test cases
│ ├── data/ # Static test data
│ └── utils/ # Utility functions
│
├── test-results/ # Screenshots, videos, text files
├── playwright.config.js
├── package.json
├── .env.test
└── README.md

## Features Implemented
- UI automation using Playwright  
- API automation using Playwright request context  
- Page Object Model (POM) for better reusability  
- Separate locator files  
- Cross-browser execution (Chromium, Firefox, WebKit)  
- Parallel test execution  
- Screenshots and videos on test failure  
- Environment-based execution using `.env` files  
- Browser-specific book details stored in text files  
- Book details attached to report only when test passes  
---

## Environment Setup
Environment values are stored in `.env` files.  
Example `.env.test`:
---

## Installation
bash
npm install
npx playwright install
---
## Running Tests
Run all tests : npm run test:test
Run only UI tests: npx playwright test src/tests/ui
Run only API tests: npx playwright test src/tests/api --project=Chromium
Run UI tests on a single browser: npx playwright test src/tests/ui --project=Chromium

## Reports
HTML report is generated after test execution
Screenshots and videos are captured automatically on failures
Browser-specific book details are saved under: test-results/book-details

## View report
npx playwright show-report
