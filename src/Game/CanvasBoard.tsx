import { useRef, useEffect, useState } from "react";
import { drawObject, clearBoard, IObjectBody } from "../utilities";

export interface ICanvasBoard {
  height: number;
  width: number;
}

function CanvasBoard({ height, width }: ICanvasBoard) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [snake, setSnake] = useState<IObjectBody[]>([{ x: 20, y: 20 }, { x: 40, y: 20 }]);
  const snakeColor = "#91C483";

  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);


  const moveSnake = (movementX: number, movementY: number) => {
    setSnake(snake.map((snakePart) => {
      return { ...snakePart, x: snakePart.x + movementX, y: snakePart.y + movementY }
    }))
  }

  useEffect(() => {
    setContext(canvasRef.current && canvasRef.current.getContext("2d"));

    clearBoard(context, width, height);
    drawObject(context, snake, snakeColor);
  }, [context, snake])

  return (
    <>
      <button onClick={() => moveSnake(0, -20)}>up</button>
      <button onClick={() => moveSnake(0, 20)}>down</button>
      <button onClick={() => moveSnake(-20, 0)}>left</button>
      <button onClick={() => moveSnake(20, 0)}>right</button>

      
      <canvas
        ref={canvasRef}
        style={{
          border: "3px solid black",
        }}
        height={height}
        width={width}
      />
    </>
  )
}

export default CanvasBoard;
