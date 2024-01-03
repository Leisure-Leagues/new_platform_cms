import React from 'react'
import Editor from 'react-simple-wysiwyg'
import { useState, useRef } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const CreateNewsArticle = () => {
  const [editorContent, setEditorContent] = useState('')
  const [addNewArticle, setAddNewArticle] = useState(false)

  function onEditorChange(event) {
    setEditorContent(event.target.value)
  }

  const createNewArticle = () => {
    setAddNewArticle(prev => !prev)
  }

  const fileInputRef = useRef(null)

  const handleButtonClick = () => {
    // Trigger the file input click when the button is clicked
    fileInputRef.current.click()
  }

  const handleFileChange = event => {
    // Handle the selected file
    const selectedFile = event.target.files[0]
    console.log('Selected File:', selectedFile)

    // You can perform additional actions with the selected file here
  }

  return (
    <>
      {!addNewArticle && (
        <Grid item xs={12}>
          <Button variant='contained' onClick={createNewArticle}>
            Create news Article
          </Button>
        </Grid>
      )}
      {addNewArticle && (
        <>
          <Grid item xs={12}>
            <Editor value={editorContent} onChange={onEditorChange} containerProps={{ style: { height: '400px' } }} />
          </Grid>
          <input type='file' ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
          <Button variant='contained' sx={{ ml: 5, mt: 5 }} onClick={handleButtonClick}>
            Upload Image
          </Button>

          <Grid item xs={12}>
            <Button variant='contained'>Save News Article</Button>
            <Button variant='outlined' color='error' sx={{ ml: 5 }} onClick={createNewArticle}>
              Discard
            </Button>
          </Grid>
        </>
      )}
    </>
  )
}

export default CreateNewsArticle
