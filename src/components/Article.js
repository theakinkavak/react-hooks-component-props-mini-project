import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {

  let emoji = <span role="img" aria-label="coffee-cup">☕️</span>
  let emojiCounter;

  if (minutes < 30) {
    emojiCounter = (Math.round(minutes / 5));
    if(emojiCounter === 1) {
      emoji = <span role="img" aria-label="coffee-cup">☕️</span>
    } else if (emojiCounter === 2) {
      emoji = <span role="img" aria-label="coffee-cup">☕️☕️</span>
    } else {
      emoji = <span role="img" aria-label="coffee-cup">☕️☕️☕️</span>
    }
  } else {
    emojiCounter = Math.round(minutes/10);
    emoji = <span role="img" aria-label="coffee-cup">🍱🍱🍱🍱🍱</span>
  }

  return (
      <article>
          <h3>{title}</h3>
          <small>{date} • {emoji} {minutes} min read </small>
          <p>{preview}</p>
          
      </article>
  )
}

export default Article;
