import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  public parameter: number;
  constructor() {
    this.parameter = 4;
  }

  ngOnInit(): void {
    this.drawRectable(this.parameter);
  }

  public onSubmit(data: object): void {
    console.log(data)
  }

  // tslint:disable-next-line:typedef
  drawRectable(parameter: any) {
    const CANVAS_WIDTH = 400;
    const CANVAS_HEIGHT = 400;
    const canvas = document.getElementById('canvas');
    // @ts-ignore
    if (canvas.getContext) {
      // @ts-ignore
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgba(256, 256, 256, 0.8)'; // background fill
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      ctx.fillStyle = 'rgb(35, 184, 253)'; // area
      ctx.fillRect(200, 200, parameter * 20, parameter * 40); // rectangle
      ctx.fill();
      ctx.moveTo(200 - parameter * 20, 200); // triangle
      ctx.lineTo(200, 200 + parameter * 20);
      ctx.lineTo(200, 200);
      ctx.fill();
      ctx.lineTo(200, 200 - parameter * 40); // quarter of circle
      ctx.arc(200, 200, parameter * 40, -Math.PI / 2, Math.PI, true);
      ctx.lineTo(200, 200);
      ctx.fill();

      this.drawAxis(ctx);
    }
  }

  // tslint:disable-next-line:typedef
  drawAxis(ctx: any) {
    const CANVAS_WIDTH = 400;
    const CANVAS_HEIGHT = 400;
    const CANVAS_STEP_X = CANVAS_WIDTH / 2 / 7;
    const CANVAS_STEP_Y = CANVAS_HEIGHT / 2 / 7;

    for (let x = 40; x < 361; x += 40) { // gird
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 400);
    }
    for (let y = 40; y < 361; y += 40) {
      ctx.moveTo(0, y);
      ctx.lineTo(400, y);
    }
    ctx.strokeStyle = '#333';
    ctx.stroke();

    ctx.fillStyle = 'black'; // axis
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(400, 200);
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 400);
    ctx.stroke();

    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(CANVAS_STEP_X / 2, CANVAS_HEIGHT / 2);
    ctx.lineTo(CANVAS_WIDTH - CANVAS_STEP_X / 2, CANVAS_HEIGHT / 2);
    ctx.moveTo(CANVAS_WIDTH - CANVAS_STEP_X, CANVAS_HEIGHT / 2 - CANVAS_STEP_Y / 4);
    ctx.lineTo(CANVAS_WIDTH - CANVAS_STEP_X / 2, CANVAS_HEIGHT / 2);
    ctx.lineTo(CANVAS_WIDTH - CANVAS_STEP_X, CANVAS_HEIGHT / 2 + CANVAS_STEP_Y / 4);

    ctx.moveTo(CANVAS_WIDTH / 2, CANVAS_HEIGHT - CANVAS_STEP_Y / 2);
    ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_STEP_X / 2);
    ctx.moveTo(CANVAS_WIDTH / 2 - CANVAS_STEP_X / 4, CANVAS_STEP_Y);
    ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_STEP_Y / 2);
    ctx.lineTo(CANVAS_WIDTH / 2 + CANVAS_STEP_X / 4, CANVAS_STEP_Y);
    ctx.stroke();

    ctx.lineWidth = 1;
  }

}