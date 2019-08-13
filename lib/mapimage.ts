// Node libraries
import * as stream from 'stream';

// Public libraries
import * as Canvas from "canvas";

export function createImage(): stream.Readable
{
  const canvas = Canvas.createCanvas(200, 200);
  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.beginPath();
  ctx.lineTo(30, 30);
  ctx.lineTo(170, 30);
  ctx.stroke();
  return canvas.createPNGStream();
}
