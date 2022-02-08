import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

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
    private router: Router,
    private pageToggleService: PageToggleService
  ) { }

  goClock() {
    // this.router.navigateByUrl("/clock")
    this.pageToggleService.goPage("/clock")
  }

  startTime($event: any) {
    this.present = $event;
  }

  ngOnInit(): void {
  }

}
