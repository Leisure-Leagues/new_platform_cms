import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import ArticlePreview from './ArticlePreview'
import { useState } from 'react'
import CreateNewsArticle from './CreateNewsArticle'

const ManageNews = () => {
  const [newArticle, setNewArticle] = useState(true)

  const newsArticles = [
    {
      id: 1,
      headline: 'England beat Panama 7-0 in Socca America Semi Final',
      desc: 'England cruised into the final of the Socca America by putting 7 goals past a disappointing Panma in Cancun. England will meet Argentina in the final after they earned a hard fought victory against Brazil earlier on in the day.',
      image:
        'https://i.guim.co.uk/img/media/5944a5f555203a8ddf6c2a07ad27c014a53f8cdc/0_23_3712_2227/master/3712.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=2d48177b4dd7ecdc5a69a69e9706d009'
    },
    {
      id: 2,
      headline: 'Argentina beat Brazil in heated match',
      desc: 'In a heated and closely contested battle, Argentina emerged victorious against Brazil in a high-stakes football match that captivated fans worldwide. The clash between these South American football powerhouses took place in Cancun and lived up to its billing as a spectacle of skill, passion, and rivalry.',
      image:
        'https://s.france24.com/media/display/0b178672-0e98-11ec-8639-005056bfb2b6/w:980/p:16x9/AP21248693380902.jpg'
    },
    {
      id: 3,
      headline: 'Record Temperatures expected for Semi Final Clashes',
      desc: 'As the world eagerly awaits the semi-final clashes in the Socca Copa Americas, a new element is set to intensify the already high stakes record-breaking temperatures. Meteorologists are predicting scorching conditions for the upcoming matches, adding an extra layer of challenge for the teams vying for a spot in the tournaments grand finale.',
      image: 'https://www.pta.co.uk/pta/media/207-hot-weather-plans.jpg'
    }
  ]

  return (
    <Grid container spacing={5}>
      {!newArticle && (
        <>
          <Grid item xs={12}>
            <Button variant='contained'>Create News Article</Button>
          </Grid>

          {newsArticles.map(article => (
            <Grid item xs={6} key={article.id}>
              <ArticlePreview data={article} />
            </Grid>
          ))}
        </>
      )}

      {newArticle && <CreateNewsArticle />}
    </Grid>
  )
}

export default ManageNews
