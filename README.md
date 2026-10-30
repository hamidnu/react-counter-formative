# React Counter
View React Counter: https://teal-daifuku-14aa01.netlify.app/ 

A small React application for the Advanced Software Engineering formative practical assignment. The counter starts at **0**, increases by one each time the user clicks the button, and stops at **10**.

## Technology choices

- React 17 
- CSS 
- Vite, running the development server and creating the production build
- Vitest, running automated tests
- React Testing Library 

## Requirements

- Node.js 18 or later
- npm

## Run locally

On Windows PowerShell, if `npm` is blocked because script execution is disabled, use `npm.cmd` instead (for example, `npm.cmd install` and `npm.cmd run dev`). This avoids changing the system's execution policy.

1. Open a terminal in the project folder.
2. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Run the tests

Run the automated test suite once:

```bash
npm test
```

Run tests in watch mode while developing:

```bash
npm run test:watch
```

## Test-Driven Development (TDD)

For this project, a useful first test is that `incrementCount(0)` returns `1`. Further tests cover the transition from `9` to `10` and confirm that `10` remains `10`.
