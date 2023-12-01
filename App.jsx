import React from 'react';

const Header = (props) => (
    <h1>{props.name}</h1>
)

const Part = (props) => (
    <>
      <h2>{props.part.name}</h2>
      <p>There are <u><b>{props.part.exercises}</b></u> exercises in this part of the course.</p>
    </>
)

const Content = (props) => (
    <>
    <ul>
      {props.course.parts.map((part) => {
        return <Part key={part.id} part={part}/>
      })}
    </ul>
    </>
)

const Total = ({parts}) => {
  parts.forEach(part => console.log(part));
  let total = parts.reduce((acc, cur) => acc + cur.exercises, 0)
  // props.parts.forEach(part => {
  //   total += part.exercises;
  // })
  return (
    <>
      <p>There are <u><b>{total}</b></u> exercises in total.</p>
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
    {courses.map(course => {
      return <Course course={course} />
    })}
  </>
  )
}

const Course = (props) => {
  return (
    <>
    <Header name={props.course.name}/>
    <Content course={props.course}/>
    <Total parts={props.course.parts}/>
    </>
  )
}

export default App