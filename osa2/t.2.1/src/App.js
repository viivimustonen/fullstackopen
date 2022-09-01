
const Course = ({ course }) => (
  <div>
   <Header course={course} />
   <Content course={course} />
   <strong>
        <Total course={course} />
      </strong>
  </div>
)

const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (<Part key={part.id} part={part} />))}
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Total = ({ course }) => {
  const totalExercises = 0;
  const total = course.parts.reduce((s, p) => s + p.exercises, totalExercises)
  return(
    <div>total of {total} exercises </div>
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
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (<Course key={course.id} course={course} />))}
    </div>
  )
}

export default App

