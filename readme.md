 1. What is JSX, and why is it used?

Answer:

JSX full form is JavaScript XML. It’s a syntax extension for JavaScript that let us write HTML-like code inside React components. JSX makes the code more readable and expressive. It allows us to structure UI elements in a way that closely resembles actual HTML, making it easier to visualize and maintain our component layout.

---

 2. What is the difference between State and Props?

Answer:

1. Props – They are like gifts from a parent component to child — they’re passed down, fixed, and meant to be used, not changed.

2. State – It is data that a component manages internally. It can change over time, usually in response to user actions or events.

---

3. What is the useState hook, and how does it work?

Answer:

useState is a React hook that let us add state to functional components. We can call it with an initial value, and it returns an array with two elements: the current state value and a function to update it. When we call the update function, React re-renders the component with the new state.

---

4. How can you share state between components in React?

Answer:

To share state, we typically lift the state up to a common parent component and pass it down through props to the child component. This way, multiple child components can access and modify the shared state.

---

5. How is event handling done in React?

Answer:

React handles events using camelCase syntax and passes functions as event handlers. For example, instead of onclick, we use onClick. When we want something to happen, like a button click write a function and tell React to run that function when the event happens.