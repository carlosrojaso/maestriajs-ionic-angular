import { Component } from '@angular/core';

import { DummyData } from '../dummy-tasks';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: any = [];
  constructor() {
    this.items = DummyData;
  }

}
