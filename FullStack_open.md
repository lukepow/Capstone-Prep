# Part 1:
## Introduction to React

We can define a React component like this:
```js
const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
```
The layout of React components are written using JSX, then it is compiled into javascript
 - this compilation is handled by Babel
 - JSX allows you to imbed dynamic content by writing JS with curly braces
 - In JSX, every tag needs to be closed. So, a `<br>` tag must be written like `<br />`

You can pass data to components using props:
```js
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}
```
and
```js
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='George' />
      <Hello name='Daisy' />
    </div>
  )
}
```
Some notes:
 - React component names must be capitalized
 - the content of a React component usually contains one root element
   - to mitigate creating a duplicate root element, you can use fragments (wrapping the element to be returned by the component in an empty element like `<>`
 - Objects cannot be rendered

## Component, State, Event Handlers
` const [ counter, setCounter ] = useState(0)`
 - This function call adds state to the component and renders it initialized with a value of 0. The function returns an array with two items
 - The `counter` variable is assigned the initial value of `state` which is zero. `setCounter` is assigned a function used to modify a state
 - 

```js
import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)


  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}

export default App
```

```js
const App = () => {
  const [ counter, setCounter ] = useState(0)


  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>

      <button onClick={increaseByOne}>
        plus
      </button>

      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}
```
Here, we define two event handlers `increaseByOne` and `setToZero`

Refactoring gives us the following:

Displaying the value of the counter:
```js
const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
```
