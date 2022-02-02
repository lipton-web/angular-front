import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  present= "welcome";

  // 버튼 누르는 $event 글자 담기
  commandText!: string

  constructor() { }

  startTime($event: any) {
    this.present = $event;
  }

  ngOnInit(): void {
  }

}
