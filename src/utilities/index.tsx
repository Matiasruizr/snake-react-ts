import { OBJECT_WIDTH } from "./definitions";

export interface IObjectBody {
  x: number;
  y: number;
}

// This function clear all the pixels or objects present inside the rectangle, take width and height as an argument for the rectangle to be cleared.
export const clearBoard = (context: CanvasRenderingContext2D | null, width: number, height: number) => {
  if (context) {
    context.clearRect(0, 0, width, height);
  }
};

// This function draw the object on the canvas, take objectBody as an argument which is an array of objects, each object has x and y coordinates.
export const drawObject = (
  context: CanvasRenderingContext2D | null,
  objectBody: IObjectBody[],
  fillColor: string,
  strokeStyle = "#14444"
) => {
  if (context) {
    objectBody.forEach((object: IObjectBody) => {
      context.fillStyle = fillColor;
      context.strokeStyle = strokeStyle;
      context?.fillRect(object.x, object.y, OBJECT_WIDTH, OBJECT_WIDTH);
      context?.strokeRect(object.x, object.y, OBJECT_WIDTH, OBJECT_WIDTH);
    });
  }
};
