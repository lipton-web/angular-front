import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", //경로
    redirectTo: "stopwatch",  //ex) https://domain.com/index
    pathMatch: "full" //ex) prefix로 설정하면 https://domain.com/index*** 일 때 index만 맞아도 연결
  },
  // {
  //   path: "index", 
  //   component: AppComponent // index로 갈 때 AppComponent 보여주기
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
