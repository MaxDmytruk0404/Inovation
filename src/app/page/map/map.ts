import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Header } from '../../component/header/header';
import 'leader-line';
declare let LeaderLine: any;

@Component({
  selector: 'app-map',
  imports: [Header],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map implements OnInit {
  @ViewChild('block1', { static: true }) block1!: ElementRef;
  @ViewChild('block2', { static: true }) block2!: ElementRef;
  @ViewChild('block3', { static: true }) block3!: ElementRef;
  @ViewChild('block4', { static: true }) block4!: ElementRef;
  @ViewChild('block5', { static: true }) block5!: ElementRef;
  @ViewChild('block6', { static: true }) block6!: ElementRef;
  @ViewChild('block7', { static: true }) block7!: ElementRef;
  @ViewChild('block8', { static: true }) block8!: ElementRef;
  @ViewChild('block9', { static: true }) block9!: ElementRef;
  @ViewChild('block10', { static: true }) block10!: ElementRef;
  @ViewChild('block11', { static: true }) block11!: ElementRef;
  @ViewChild('block12', { static: true }) block12!: ElementRef;
  @ViewChild('block13', { static: true }) block13!: ElementRef;
  @ViewChild('block14', { static: true }) block14!: ElementRef;
  @ViewChild('block15', { static: true }) block15!: ElementRef;
  @ViewChild('block16', { static: true }) block16!: ElementRef;
  @ViewChild('block17', { static: true }) block17!: ElementRef;
  @ViewChild('block18', { static: true }) block18!: ElementRef;


  private lines: any[] = []; 

  ngOnInit() {
    this.lines.push(
      new LeaderLine(this.block1.nativeElement, this.block2.nativeElement, {
        color: 'rgba(255, 255, 255, 0.5)',
        size: 4,
        endPlug: 'arrow',
        startSocket: 'right',
        endSocket: 'left',
        endSocketGravity: -10,
      })
    );
    this.lines.push(
      new LeaderLine(this.block3.nativeElement, this.block4.nativeElement, {
        color: 'rgba(255, 255, 255, 0.5)',
        size: 4,
        endPlug: 'arrow',
        startSocket: 'left',
        endSocket: 'right',
      })
    );
    this.lines.push(
      new LeaderLine(this.block5.nativeElement, this.block6.nativeElement, {
        color: 'rgba(255, 255, 255, 0.5)',
        size: 4,
        endPlug: 'arrow',
        startSocket: 'right',
        endSocket: 'left',
      })
    );
    this.lines.push(
      new LeaderLine(this.block7.nativeElement, this.block8.nativeElement, {
        color: 'rgba(255, 255, 255, 0.5)',
        size: 4,
        endPlug: 'arrow',
        startSocket: 'left',
        endSocket: 'right',
      })
    );

    this.lines.push(
      new LeaderLine(this.block9.nativeElement, this.block10.nativeElement, {
        color: 'rgba(255, 255, 255, 0.5)',
        size: 4,
        endPlug: 'arrow',
        startSocket: 'right',
        endSocket: 'left',
      })
    );

    this.lines.push(
      new LeaderLine(this.block11.nativeElement, this.block12.nativeElement, {
        color: 'rgba(255, 255, 255, 0.5)',
        size: 4,
        endPlug: 'arrow',
        startSocket: 'left',
        endSocket: 'right',
      })
    );

    this.lines.push(
      new LeaderLine(this.block13.nativeElement, this.block14.nativeElement, {
        color: 'rgba(255, 255, 255, 0.5)',
        size: 4,
        endPlug: 'arrow',
        startSocket: 'right',
        endSocket: 'left',
      })
    );

    this.lines.push(
      new LeaderLine(this.block15.nativeElement, this.block16.nativeElement, {
        color: 'rgba(255, 255, 255, 0.5)',
        size: 4,
        endPlug: 'arrow',
        startSocket: 'left',
        endSocket: 'right',
      })
    );

    this.lines.push(
      new LeaderLine(this.block17.nativeElement, this.block18.nativeElement, {
        color: 'rgba(255, 255, 255, 0.5)',
        size: 4,
        endPlug: 'arrow',
        startSocket: 'right',
        endSocket: 'left',
      })
    );
  }
  ngOnDestroy() {
    // видаляємо всі лінії при виході з компонента
    this.lines.forEach(line => line.remove());
  }
}
