import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
// @ts-ignore
import * as rrweb from 'node_modules/rrweb';
import * as rrwebplayer from 'node_modules/rrweb-player/dist';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  @ViewChild('player') playerHTMLElement: ElementRef;


  ngOnInit() {
    // this.recordForAnInterval();
    // @ts-ignore
    this.apiService.get('/event').subscribe(res => this.eventList = res.payload);
    console.log(rrweb);
    console.log(rrwebplayer);
  }

  play(e) {
    // const replayer = new rrweb.Replayer(JSON.parse(e).events);

    // replayer.play();

    let player = new rrwebplayer.default({
      target: this.playerHTMLElement.nativeElement, // customizable root element
      data: {
        events: JSON.parse(e).events,
        autoPlay: true,
      },
    });

    console.log(player)
  }

  eventList = [];


}
