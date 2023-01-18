import './App.css'
import { Note, ContentNotes, ExampleContainer } from './components'
import { CounterApp } from './examples/CounterApp'
import { reactNote, reduxNote } from './notes'


function App() {
  return (
    <div className="App">
      <header>
        <a href={reactNote.link} target="_blank" className='animate_rotate'>
          <img src={reactNote.logo} className="logo" alt="React logo" />
        </a>
        <a href={reduxNote.link} target="_blank" className='animate_rotate'>
          <img src={reduxNote.logo} className="logo" alt="Redux logo" />
        </a>
        <h1>React.js + Redux</h1>
        <ContentNotes>
          <Note note={reactNote} />
          <Note note={reduxNote} />
        </ContentNotes>
      </header>
      <main>
        <ExampleContainer children={<CounterApp />}/>
      </main>
    </div>
  )
}

export default App