# Architecture and Design Guidelines

## Introduction

Welcome to the Silk UI – an open-source component library for React.js and Tailwind CSS. The goal of this project is to provide a collection of reusable and well-designed components that can be easily integrated into any React.js project. This document outlines the architecture and design principles that guide the development of the components in this library.

## Folder Structure

The recommended folder structure for this project is as follows:

```js
/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Table/
│   │   │   ├── Table.tsx
│   │   │   ├── Table.test.tsx
│   │   │   └── Table.stories.tsx
│   │   └── Modal/
│   │       ├── Modal.tsx
│   │       ├── Modal.test.tsx
│   │       └── Modal.stories.tsx
│   └── ...
└── ...
```

## Component Development

To create a new component in the library, follow these steps:

1. Create a new folder for the component inside the `src/components/` directory.
2. Write the component in TypeScript (e.g., `ComponentName.tsx`).
3. Create a story in tsx format (e.g., ComponentName.stories.tsx) using Storybook to showcase the component's usage and variations.
4. Write tests for the component using React Testing Library and Jest (e.g., ComponentName.test.tsx).

## Component Styling

To maintain consistency across the library, utilize Tailwind CSS utility classes for styling components. This approach ensures easy customization and consistent visuals throughout the project.

## React Components and Props

Follow clear and descriptive naming conventions for props.

## TypeScript Usage

1. Use TypeScript properly to provide type safety. Try not to use `any`
2. Type all props and state in components to ensure clarity and reduce errors.

## Storybook

1. Use Storybook for component development and testing.
2. Create meaningful and visually appealing stories to demonstrate component usage and variations.
3. Ensure all components have associated stories for easy reference.

## Testing

1. Write unit tests for components using React Testing Library and Jest.
2. Practice test-driven development (TDD) to ensure robust and reliable components.

## Code Formatting and Linting

1. We are using `prettier` and `eslint` for code formatting and enforcing our rules. Please make sure you are following all the rules.
2. It will be helpful if these extensions are installed in your IDE.

## License

This project is open-source and is licensed under the MIT License. See the LICENSE file for more details.

## Conclusion

Thank you for joining the Silk UI community! We appreciate your contributions and look forward to building an amazing collection of components together. Happy coding!
