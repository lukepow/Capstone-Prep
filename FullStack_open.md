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

### Part B
First, we add an HTML component that will be used for adding new notes. We also initialize our `notes` variable to equal `props.notes`

```js
const App = (props) => {
  const [notes, setNotes] = useState(props.notes)


  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}
```

If we want to access the data contained in the form's input element, we can use controlled components.

We can add a piece of state called `newNote` and set it as the input element's value attribute:
```js
const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  const [newNote, setNewNote] = useState(
    'a new note...'
  ) 

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>

        <input value={newNote} />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}
```

To enable editing of the input element, we have to register an event handler that synchronizes the changes made to the input with the component's state:
```js
const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  ) 

  // ...


  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}

          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}
```
now the App component's `newNote` state reflects the current value of the input, which means we can complete the `addNote` function for creating new notes:
```js
const addNote = (event) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    important: Math.random() < 0.5,
    id: notes.length + 1,
  }

  setNotes(notes.concat(noteObject))
  setNewNote('')
}
```

### Getting Data From the Server:

After installing axios, we can use it like this:
```js
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)
```
A more common way to use axios:
```js
axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })
```

The effect hook:
 - the effect hook lets you perform side effects on function components
 - We can use them to fetch data from the server

Now we can update the `App` component as follows:
```js
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  // ...
}
```

# Part 3
The `express` module is designed to work with the built in `http` module to make it easier to work with a server

```js
const express = require('express')
const app = express()

let notes = [
  ...
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```
Above, our code has two routes to the application. The first defines an event handler to handle GET requests made to the root. The event handler accepts two parameters the first `request` parameter contains all of the information of the request, and the second `response` parameter is used to define how the request is responded to. 

We can start our application using nodemon like this: `node_modules/.bin/nodemon index.js`

With the notes app, we can retrieve a single note like this:
```js
app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})
```

And we can delete a resource like this:
```js
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})
```
