import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-pie-timer',
  templateUrl: './pie-timer.component.html',
  styleUrls: ['./pie-timer.component.scss']
})
export class PieTimerComponent implements OnInit {
  c1!: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  c2!: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  l0!: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  p1!: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  p2!: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;

  origin = { x: 160, y: 160 };
  lastPos: any;

  constructor() { }

  getRadialPosition(value: number, maxValue: number, radius: number, origin: any): any{
    const degrees = (value / maxValue) * 360;
    const theta = degrees * (Math.PI / 180);

    const pos = {
      x: origin.x + (Math.sin(theta) * radius),
      y: origin.y + (Math.cos(theta) * radius),
      sin: Math.sin(theta),
      cos: Math.cos(theta),
      angle: degrees
    };

    this.lastPos = pos;

    return pos;
  }

  updateLines(){
    this.l0.attr('x2', this.lastPos.x);
    this.l0.attr('y2', this.lastPos.y);

    this.p1.attr('d', this.generateSVGSegment(this.origin.x, this.origin.y, 110, 0, this.lastPos.angle));
    this.p2.attr('d', this.generateSVGArc(this.origin.x, this.origin.y, 110, 0, this.lastPos.angle));
  }

  d2r(degs: number): number{
    return degs * (Math.PI / 180);
  }

  generateSVGSegment(x: number, y: number, r: number, startAngle: number, endAngle: number){
    // convert angles to radians
    startAngle = this.d2r(startAngle);
    endAngle = this.d2r(endAngle);

    const largeArc = endAngle - startAngle <= Math.PI ? 0: 1; // 1 if angle > 180 degrees
    const sweepFlag = 1; // is arc to be drawn in +ve direction?

    return ['M', x, y,
            'L', x + Math.sin(startAngle) * r, y - (Math.cos(startAngle) * r),
            'A', r, r, 0, largeArc, sweepFlag, x + Math.sin(endAngle) * r, y - (Math.cos(endAngle) * r),
            'Z'].join(' ');
  }

  generateSVGArc(x: number, y: number, r: number, startAngle: number, endAngle: number){
    // convert angles to radians
    startAngle = this.d2r(startAngle);
    endAngle = this.d2r(endAngle);

    if(startAngle < endAngle){
      let s = startAngle;
      startAngle = endAngle;
      endAngle = s;
    }

    // if arc is over 180 degrees, we must set a large arc flag
    // so the path isn't drawn via shortest path
    const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;
    
    // path command, start by moving cursor
    let arr = ['M', x + Math.sin(startAngle) * r, y - (Math.cos(startAngle) * r)];
    const rx = r;
    const ry = r;

    const sweepFlag = 1;

    // arc command
    arr = arr.concat(['A', rx, ry, 0, +largeArcFlag, sweepFlag]);

    // arc end position
    arr = arr.concat([x + Math.sin(endAngle) * r, y - (Math.cos(endAngle) * r)]);

    return arr.join(' ');
  }

  tweenPoint(){

    this.c2.attr('cx', this.getRadialPosition(600, 1200, 100, this.origin).x)
      .attr('cy', this.getRadialPosition(600, 1200, 100, this.origin).y);

    this.updateLines();

    // this.c2.transition()
    //   .duration(2000)
    //   .attrTween('cx', () => {
    //     return (t: number) => {
    //       const pos = this.getRadialPosition(t, 1, 100, this.origin);
    //       return pos.x;
    //     };
    //   })
    //   .attrTween('cy', () => {
    //     return (t: number) => {
    //       const pos = this.getRadialPosition(t, 1, 100, this.origin);
    //       this.updateLines();
    //       return pos.y;
    //     };
    //   })
    //   .each(this.tweenPoint);
  }

  ngOnInit(): void {
    var svg = d3.select('#svg-container');

    this.p1 = svg.select('#p1');
    this.p2 = svg.select('#p2');

    this.c1 = svg.select('#c1');
    this.c2 = svg.select('#c2');

    this.l0 = svg.select('#l0');

    this.l0.attr('x1', 160);
    this.l0.attr('y1', 160);

    this.tweenPoint();
  }
}
