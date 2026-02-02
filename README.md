# Frauda - Personal Loan Calculator

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

3. **Run tests**
   ```bash
   npm run test
   ```

## What did you spend time on and what did you choose not to do?:

- **Good**: I chose to structure the project in a way that is easy to understand and maintain. I used a component-based architecture, with each component having its own responsibility. I did something similar for the endpoints where they are grouped by their purpose.

- **Improvments**
  The input and select components could be more advanced in regards to the validation but I chose not to dive too deep into this aspect because of the time limitations. For example the input component could have internal validation handling (e.g., red borders, warning icons, individual validation states). Instead I chose to have a centralized form validation approach where the "Calculate" button is only enabled when all inputs meet the requirements, ensuring only valid data is submitted.

  The tests could also have more coverage but I chose not to dive too deep into this aspect aswell because of the time limitations. Instead I focused on small tests that verify accurate component rendering.

## AI Usage

I used Antigravity as my IDE during this project. It is a tool similar to Co-Pilot but free and is good for writing out boilerplate code and getting started with a project.
