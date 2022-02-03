import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present= "welcome";

  // 버튼 누르는 $event 글자 담기
  commandText!: string

  constructor(
    private router: Router
  ) { }

  goClock() {
    this.router.navigateByUrl("/clock")
  }

  startTime($event: any) {
    this.present = $event;
  }

  ngOnInit(): void {
  }

}
