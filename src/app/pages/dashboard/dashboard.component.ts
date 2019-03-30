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
    // @ts-ignore
    this.apiService.get('/event').subscribe(res => this.eventList = res.payload);
  }

  play(e) {
    let player = new rrwebplayer.default({
      target: this.playerHTMLElement.nativeElement, // customizable root element
      data: {
        events: this.transformEvents(e),
        autoPlay: true,
      },
    });
  }

  transformEvents(e) {
    return JSON.parse(e).events;
  }

  eventList = [];
}
