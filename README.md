## Dev-stack

Dev Stack is a responsive React application that allows users to explore different web development technologies and build their own preferred development stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- Vite
- JSON

## Key Features

- Browse 12 different development technologies loaded from a JSON file.
- Add technologies to a personal stack and prevent duplicate selections.
- Remove individual technologies or clear the entire stack.
- Responsive layout for desktop, tablet, and mobile devices.
- Toast notifications for stack actions.

## React Questions

### 1. What is JSX?

JSX is a syntax used in React that allows us to write HTML-like code inside JavaScript or TypeScript. It makes creating user interfaces easier to read and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data inside a component that can change over time.

### 3. What is the useState hook?

useState is a React hook used to create and update state inside a functional component.

### 4. What is the useEffect hook?

useEffect is a React hook used to perform side effects. For example, in this project I used useEffect to fetch technology data from the JSON file when the component loads.

### 5. Why do we use keys in React lists?

Keys help React identify each item in a list. They allow React to efficiently update the correct item when the list changes.

### 6. What is conditional rendering?

Conditional rendering means displaying different UI depending on a condition. For example, this project displays an empty stack message when no technologies are selected and displays the selected technologies when the stack contains items.

### 7. How does data pass from a parent component to a child component?

Data is passed from a parent component to a child component using props. In this project, technology information and functions are passed from the Technologies component to the TechnologyCard component.
