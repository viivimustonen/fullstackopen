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
  export default Course  