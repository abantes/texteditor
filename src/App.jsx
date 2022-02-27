import { useState } from 'react'
import { Modules } from './utils/Modules'
import { Formats } from './utils/Formats'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export function App() {
  const [body, setBody] = useState()

  const handleBody = event => {
    setBody(event)
  }

  return (
    <div className='App'>
      <ReactQuill
        placeholder='Type any text'
        theme='snow'
        value={body}
        onChange={handleBody}
        modules={Modules}
        formats={Formats}
      />
    </div>
  )
}