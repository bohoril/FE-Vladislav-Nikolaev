# FE-Vladislav-Nikolaev

## Description
UI test framework for The Internet application.

## Setup Process

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Install Playwright browsers:
    ```sh
    npx playwright install
    ```

## Usage

### Build the Project
1. To build the project, run:
    ```sh
    npm run build
    ```

### Run the Tests
1. To execute the tests, use:
    ```sh
    npx playwright test
    ```

2. To open the test report in the browser, run:
    ```sh
    npx playwright show-report
    ```

## Project Structure
- `pages/`: Contains the Page Object Model (POM) classes.
- `tests/`: Contains the test scripts.
- `utils/`: Contains utilities.

## Explanation of Approach

### TypeScript
TypeScript is used for its static typing, which helps catch errors early during development and improves code quality.
Additionally, TypeScript is natively supported by Playwright, and it is a part of the company tech stack.

### Playwright
Playwright is chosen for its ability to automate modern web applications across different browsers with ease.
It provides powerful features for end-to-end testing just out of the box.

### Page Object Model (POM)
The POM pattern is used to create an abstraction layer between the test scripts and the UI.
This makes the tests more maintainable and reusable.

### Logging
The `pino` library is used for logging due to its performance and flexibility.
The `pino-pretty` is used to format the logs for better readability.

### CI/CD
The project is set up to run on GitHub Actions. The CI/CD pipeline is triggered on every push to the `main` branch.