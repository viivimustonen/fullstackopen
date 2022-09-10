import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)



axios
.get('http://localhost:3001/persons')
.then(response => {
  const notes = response.data
  console.log(notes)
})

