1. What is the difference between Component and PureComponent?
   Give an example where it might break my app.

   PureComponent extends Component and provides an optimized implementation of shouldComponentUpdate.

   - Performs a shallow comparison of props and state before re-rendering.
   - If props and state remain the same, it prevents unnecessary re-renders.

   Mutating its props directly does not triggers re-render because the shallow comparison wont't catch it.

2. Context + ShouldComponentUpdate might be dangerous. Why is
   that?

   When using context, components that consume context values will re-render whenever the context changes—even if their own props or state remain the same.
   If you use shouldComponentUpdate to prevent re-renders based on props, but the context changes, your component won’t reflect the updated context.

3. Describe 3 ways to pass information from a component to its
   PARENT.

   a.- Callback funtions

   - The parent component provides the implementation of the callback function and receives the data from the child.

   b.- State Managment (Context API)

   - Create a global state on the parent Component
   - Child components dispatch actions to update the global state.

   c.- Custom Events

   - Create an event emitter (a custom event system) within the parent component.
   - In the child component, emit an event when you want to send data to the parent.

4. Give 2 ways to prevent components from re-rendering.

   - Memoization with React.memo
   - Using shouldComponentUpdate (for class components)
   - Managing inner state with useRef, to prevent re-render on variable/state changes.

5. What is a fragment and why do we need it? Give an example where it
   might break my app.

   A fragment is a wrapper that allows you to group multiple elements without introducing an additional DOM node.

   If We attach event handlers to inner components.

   - Since fragments don’t create a new DOM node, events might bubble up to a higher parent component unexpectedly.

   If we are using fragments within a loop (without unique keys).

   - React might not efficiently update or reconcile the elements, leading to unexpected behavior.

6. Give 3 examples of the HOC pattern.
   Since we can use this pattern to get or manipulate the data and inject that data into a presentacional component, we can:

a.- HOCs can manage state and handle asynchronous data retrieval.
b.- Use HOCs to conditionally render components based on certain conditions, such Auth and feature toggle.
c.- HOCs can handle language localization by providing translated strings or switching between different language versions of a component.

7. What's the difference in handling exceptions in promises,
   callbacks and async...await?

   callback uses the error first approach on its arguments.
   promises uses catch after every then for modular error handlers.
   async...await uses try...catch

8. How many arguments does setState take and why is it async.
   first argument

   - Object/Value that's gonna be updated on state.
   - Callback function that updates state

   second argument

   - function that runs after setState is executed.

   setState is async because reacts queues the updates and batches multiple updates.

9. List the steps needed to migrate a Class to Function
   Component.
   a.- Replace Class with Function
   b.- State Management: If your class component uses state, replace it with the useState hook.
   c.- Lifecycle Methods: useEffect for lifecycle methods management
   d.- Convert event handlers (e.g., onClick, onChange) to regular functions within the functional component.
   e.- Change how to access props. Directly within the functional component, no need for this.props.
   f.- Export the functional component.

10. List a few ways styles can be used with components.

- Directly (inline) with style attribute
- using Classname for global css classes
- using css modules
- styled components

11. How to render an HTML string coming from the server.
    using dangerouslySetInnerHTML.
