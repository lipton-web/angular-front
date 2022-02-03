import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  // @Output은 컴포넌트에 이벤트 발생 시킬 수 있게 해 줌
  // new EventEmitter<number>();을 써 주면 string값만 넣도록 설정 가능
  @Output() clickEvent = new EventEmitter();


  constructor() { }

  test($event:MouseEvent) {
    console.log($event)
  }

  executeButton(command: string) {
    // emit() 함수는 자식컴포넌트가 부모컴포넌트에 데이터를 전달 할 수 있게 해 줌
    this.clickEvent.emit(command);
  }

  ngOnInit(): void {
  }

}
