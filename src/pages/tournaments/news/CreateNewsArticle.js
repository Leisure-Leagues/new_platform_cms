import React from 'react'
import Editor from 'react-simple-wysiwyg'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const CreateNewsArticle = () => {
  const [editorContent, setEditorContent] = useState('')

  function onEditorChange(event) {
    setEditorContent(event.target.value)
  }

  return (
    <>
      <Grid item xs={12}>
        <Editor value={editorContent} onChange={onEditorChange} containerProps={{ style: { height: '400px' } }} />
      </Grid>
      <Grid item xs={3}>
        HeroImage.jpg
        <Button variant='contained' sx={{ ml: 5 }}>
          Upload Image
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Button variant='contained'>Save News Article</Button>
        <Button variant='outlined' color='error' sx={{ ml: 5 }}>
          Discard
        </Button>
      </Grid>
    </>
  )
}

export default CreateNewsArticle
