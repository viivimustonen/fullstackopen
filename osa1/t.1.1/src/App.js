const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    //välitetään oliot suoraan taulukkona
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

//Header huolehtii kurssin nimen renderöimisestä, 
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1> {props.course}</h1>
    </div>
  )
}
//Content osista ja niiden tehtävämääristä 
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part1 = {props.parts.at(0).name} exercises1 = {props.parts.at(0).exercises} />
      <Part part2 = {props.parts.at(1).name} exercises2 = {props.parts.at(1).exercises} />
      <Part part3 = {props.parts.at(2).name} exercises3 = {props.parts.at(2).exercises} />
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p> {props.part1} {props.exercises1} </p>
      <p> {props.part2} {props.exercises2} </p>
      <p> {props.part3} {props.exercises3} </p>
    </div>
  )
}

// Total tehtävien yhteismäärästä
const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.parts.at(0).exercises +props.parts.at(1).exercises + props.parts.at(2).exercises}</p>
    </div>
  )
}
export default App
