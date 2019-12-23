import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { AddformComponent } from '../addform/addform.component';
import { DummyData } from '../dummy-tasks';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: any = [];
  title = 'ionic-app';
  modal: any;

  constructor(public modalController: ModalController) {
    this.items = DummyData;
  }

  async save() {
  }

  async openDialog() {
    this.modal = await this.modalController.create({
      component: AddformComponent
    });
    this.modal.present();
    const { data } = await this.modal.onWillDismiss();
    console.log(data);
  }
}
