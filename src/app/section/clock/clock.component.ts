import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeString!: string

  constructor(
    private router: Router
  ) {

    // rxjs 문법
    interval(1000)
      .pipe(map(() => {
      return moment().format('YYYY-MM-DD HH:mm:ss')
      }))
      .subscribe(data => {
        this.timeString = data;
      })
   }

  goStopwatch() {
    this.router.navigateByUrl("/stopwatch")
  }

  getCurrentTime() {
    let result = moment().format('YYYY-MM-DD HH:mm:ss')
    return result;
  }

  ngOnInit(): void {
  }

}
