# Playwright End-to-End Testing Project

This project provides a robust framework for end-to-end testing of web applications using Playwright. It's designed to be easily configurable and extensible, allowing for efficient and reliable test automation.

## Features

*   **Cross-Browser Testing**: Supports testing across Chromium, Firefox, and WebKit.
*   **Parallel Execution**: Configure tests to run in parallel for faster execution.
*   **Rich Reporting**: Generates detailed HTML reports for test results.
*   **Page Object Model (POM)**: Organized test structure using page objects located in the `pages/` directory.
*   **CI/CD Integration**: Includes `Dockerfile` and `Jenkinsfile` for seamless integration into continuous integration and continuous delivery pipelines.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/EvgeniiaMaltseva/playwright-project.git
    cd playwright-project
    ```
2.  Install the project dependencies:
    ```bash
    npm install
    ```
3.  Install Playwright browsers:
    ```bash
    npx playwright install
    ```

## Usage

### Running Tests

To run all tests:

```bash
npx playwright test
```

To run tests in UI mode (interactive test runner):

```bash
npx playwright test --ui
```

To run tests on a specific browser (e.g., Chromium):

```bash
npx playwright test --project=chromium
```

### CI/CD

This project includes configuration files for CI/CD:

*   `Dockerfile`: For building a Docker image of the test environment.
*   `Jenkinsfile`: Example Jenkins pipeline for running Playwright tests.

## Project Structure

*   `playwright.config.ts`: Playwright configuration file.
*   `tests/`: Contains the end-to-end test files.
*   `pages/`: Stores Page Object Model files for better test organization.
*   `test-results/`: Directory for test artifacts and results.
*   `playwright-report/`: HTML test reports are generated here.
*   `node_modules/`: Installed Node.js dependencies.
*   `Dockerfile`: Defines the Docker image for the test environment.
*   `Jenkinsfile`: Defines the Jenkins CI/CD pipeline.
*   `.github/workflows/`: GitHub Actions workflows. 