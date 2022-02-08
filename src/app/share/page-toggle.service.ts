import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageToggleService {

  routingCount = 0;

  constructor(
    private router : Router

  ) { }

  goPage(target: any) {
    this.routingCount++;
    this.router.navigateByUrl(target)
  }

}
