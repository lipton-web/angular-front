import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData!: any;

  min: number = 0
  sec: number = 0
  ms: number = 0

  timeInterval: any

  constructor() {

    console.log(this.inputData)

    // 1초 마다 콜백 함수 실행
    // setInterval(() => {
    //   this.test++;
    // }, 1000)

  }

  timeStart() {
    this.timeStop(); // 두 번 누르면 두번 실행 되서
    this.timeInterval = setInterval(() => {
      this.ms++;
    }, 10)
  }

  timeStop() {
    clearInterval(this.timeInterval)
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
  }

  // 바뀐 것을 감지
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes)
    for (let propName in changes) {

      if(propName == "inputData") {

        switch(changes[propName].currentValue) {
          case "start" :
            this.timeStart();
            break;
          case "stop" :
            this.timeStop();
            break;
          case "reset" :
            this.timeReset();
            break;
        }
      }
    }
  }

  ngOnInit(): void {
  }

}
