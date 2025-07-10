# Multi-Step Registration Form

This project is a multi-step registration form built with React, TypeScript, and Vite. It features a modern, modular architecture with a focus on best practices for development, testing, and code organization.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
  - [Running the Development Server](#running-the-development-server)
  - [Running Unit Tests](#running-unit-tests)
  - [Running End-to-End (E2E) Tests](#running-end-to-end-e2e-tests)
- [Architecture](#architecture)
- [Folder Structure](#folder-structure)
- [Git Workflow](#git-workflow)
- [Future Scope](#future-scope)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or higher is recommended)
- pnpm

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/irishabhyadav90/MultiStepRegForm
    cd MultiStepRegForm
    ```
2.  **Install dependencies:**
    ```sh
    pnpm install
    ```
3.  **Run the development server:**
    ```sh
    pnpm dev
    ```
### Environment Variables

This project requires certain environment variables to be set. Create a `.env.local` file in the root of the project and add the necessary variables.

```env
# Create a .env.local file and add your environment variables
# For example:
VITE_API_BASE_URL=http://localhost:3001
```


### Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the production version of the app.
- `pnpm lint`: Lints the code.
- `pnpm test`: Runs unit tests.
- `pnpm test:run`: Runs unit tests and exits.
- `pnpm test:coverage`: Runs unit tests with coverage.
- `pnpm test:ui`: Runs unit tests with UI.
- `pnpm cy:open`: Opens Cypress for end-to-end testing.


### running-unit-tests

```sh
pnpm test:run
```

### running-e2e-tests

```sh
pnpm cy:open
```

## Folder Structure

This project follows a modular architecture with the following components:

- `src/components`: Contains the main components of the application.
- `src/hooks`: Contains custom hooks for reusability.
- `src/utils`: Contains utility functions and constants.
- `src/api`: Contains API calls for the application.
- `src/constants`: Contains constants for the application.
- `src/components/layout`: Contains layout components for the application.
- `src/components/registration`: Contains registration components for the application.
- `src/assets`: Contains assets for the application.
- `src/pages`: Contains the main pages of the application.



## Architecture

The project follows a modern, component-based architecture with a strong emphasis on code quality and maintainability.

-  Modular Components: The UI is broken down into small, reusable components. Each component is self-contained and responsible for its own logic and presentation.

- TypeScript: The entire codebase is written in TypeScript, providing static typing to reduce runtime errors and improve developer experience.

- Axios Instance: A dedicated Axios instance is used for consuming APIs, allowing for centralized configuration of headers, interceptors, and error handling.

- Unit Testing: Unit tests are written with Vitest, a fast and modern testing framework with a Jest-compatible API.

- E2E Testing: End-to-end tests are handled by Cypress, enabling robust testing of user flows from a real user's perspective.

- Form Management: Forms are managed using React Hook Form, which is optimized for performance and integrates seamlessly with the Zod library for schema validation.

- Icons: SVG icons are used for a lightweight and scalable iconography solution.

- Routing: Client-side routing is managed by React Router.


### Git Workflow
The project adheres to best practices for Git, using a feature branch strategy:

- Feature Branches: Each new feature is developed in its own dedicated branch, created from the main branch.
- Single Commits: Feature branches are typically merged into the main branch with a single, clean commit to maintain a linear and readable history.


### Future Scope

- State Management: For more complex state management needs, we could integrate a dedicated library like Redux, Zustand, or leverage React's built-in Context API.
- Pre-commit Hooks: We could add a pre-commit hook using a tool like Husky to automatically run linting, TypeScript checks, and code formatting before each commit, ensuring code quality and consistency.
