import arrowKeys from '../assets/arrowsKeys.svg'

function HowToPlay() {
  return (
    <article>
      <h2>How to play</h2>
      <p>
        Use the arrow keys to move the snake. The snake will grow when it eats
        the food. Every time you eat food, you <b>win 1 point</b>. <br />
        If the snake collides with itself or the walls, you <b>lose</b>.
      </p>
      <img src={arrowKeys} alt="Snake game" width={140}/>
    </article>
  )
}

export default HowToPlay
