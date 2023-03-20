import React from 'react'
import memesData from '../memesData'

const Form = () => {

  const [url, setUrl] = React.useState('https://i.imgflip.com/1g8my4.jpg')
  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)]
    setUrl(randomMeme.url)
  }

  return (
    <div className='formDiv'>
      <form className='form'>
        <input type="text" placeholder="Shut up" />
        <input type="text" placeholder="and take my money" />
      </form>
      <button onClick={getMemeImage}>Get a new meme image</button>
      <img src={url} alt="meme" />
    </div>
  )
}

export default Form
