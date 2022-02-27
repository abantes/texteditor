import { useState } from 'react'
import { Modules } from '../../utils/Modules'
import { Formats } from '../../utils/Formats'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export function Editor() {
  const [body, setBody] = useState()

  const handleBody = event => {
    setBody(event)
  }

  return (
    <ReactQuill
      placeholder='Type any text'
      theme='snow'
      value={body}
      onChange={handleBody}
      modules={Modules}
      formats={Formats}
    />
  )
}