# QA Technical Assessment – Playwright Automation

## 1. Project Overview

This project is an automated testing framework built with **Playwright, TypeScript, and Playwright-BDD** to test the SauceDemo application.

It follows the **Page Object Model (POM)** design pattern to improve code reusability, maintainability, and test organisation.

## 2. Technologies

- Playwright
- TypeScript
- Playwright-BDD (Gherkin)
- Node.js and npm
- JSON test data
- Playwright HTML Reporter

## 3. Prerequisites

Ensure the following are installed:

- Node.js (LTS recommended)
- npm
- Git

## 4. Setup Instructions

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd QA-Techincal-Assessment
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install chromium
```

## 5. Running the Tests

Generate Playwright tests from the Gherkin feature files:

```bash
npx bddgen
```

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific feature:

```bash
npx playwright test --grep "End-to-end checkout journey"
```

## 6. Test Reports

Generate and view the HTML report after execution:

```bash
npx playwright show-report
```

The report provides test results, execution details, failures, and available debugging information.

## 7. Project Structure

```text
tests/
├── data/          # External JSON test data
├── features/      # Gherkin feature files
├── fixtures/      # Custom Playwright fixtures
├── pages/         # Page Object Model classes and interfaces
└── steps/         # BDD step definitions

.features-gen/     # Generated BDD test files
playwright.config.ts
package.json
README.md
```

## 8. Test Coverage

The framework covers:

- **Login:** Valid and invalid login scenarios.
- **Shopping Cart:** Adding products and validating cart counts.
- **Checkout:** Successful checkout and required-field validation.
- **Product Sorting:** Verifying product sorting functionality.
- **End-to-End Journey:** Completing a purchase, verifying confirmation, navigating back to products, checking the empty cart, and logging out.

## 9. Application Under Test

**Application:** SauceDemo  
**URL:** https://www.saucedemo.com/

**Test credentials:**
- Username: `standard_user`
- Password: `secret_sauce`

---

**Developed as part of a QA Technical Assessment.**