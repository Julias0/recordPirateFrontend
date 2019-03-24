import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as rrwebplayer from 'node_modules/rrweb-player/dist';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

  @ViewChild('player') playerHTMLElement: ElementRef;

  @Input() eventList = [];

  constructor() { }

  ngOnInit() {
  }


  play(e) {

    let player = new rrwebplayer.default({
      target: this.playerHTMLElement.nativeElement, // customizable root element
      data: {
        events: JSON.parse(e).events,
        autoPlay: true,
      },
    });

    console.log(player)
  }

}
