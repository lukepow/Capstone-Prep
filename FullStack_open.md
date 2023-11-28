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

## A more complex state, debugging React Apps

In React, it is forbidden to mutate states directly. For example, instead of this function:
```js
const handleLeftClick = () => {
  clicks.left++
  setClicks(clicks)
}
```
We create a new object:
```js
const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1 })
```

Rules of hooks:
 - the `useState` function must not be called from inside a loop, a conditional expression, or any place that is not a function defining component
   - this is done to make sure the hooks are always called in the same order

```js
const App = () => {
  // these are ok
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')

  if ( age > 10 ) {
    // this does not work!
    const [foobar, setFoobar] = useState(null)
  }

  for ( let i = 0; i < age; i++ ) {
    // also this is not good
    const [rightWay, setRightWay] = useState(false)
  }

  const notGood = () => {
    // and this is also illegal
    const [x, setX] = useState(-1000)
  }

  return (
    //...
  )
}
```

Event Handling:

Event handlers must be a function or a reference to a function, such as:

```js
<button onClick={() => console.log('clicked the button')}>
  button
</button>
```

Passing Event Handlers to Child Components:

Extracting the button into its own component:
```js
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
```
This component gets the event handler function from the `handleClick` prop and the text of the button from the `text` prop. Using the component looks like this:
```js
const App = (props) => {
  // ...
  return (
    <div>
      {value}

      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
```

We must make sure not to define components within components such as the following:
```js
// This is the right place to define a component
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  // Do not define components inside another component

  const Display = props => <div>{props.value}</div>

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
```

# Part 2:

** You can create shortcuts for common code using snippets in VSCode

We can generate React elements from an array using the `map` function

Given an array of objects it looks like this:
```js
notes.map(note => <li>{note.content}</li>)
```
The result is an array of `li` elements which can be placed in `ul` tags:
```js
const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 

          <li key={note.id}>
            {note.content}
          </li>
        )}
      </ul>
    </div>
  )
}
```
Here, we also include a `key` attribute. This allows React to determine how to update the view generated by a component when the component is re-rendered
 - Don't use array indexes as keys

Common practice in react is to declare each component in its own file as an ES6 module
