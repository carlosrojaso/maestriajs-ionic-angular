import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss'],
})
export class AddformComponent implements OnInit {
  newTask: any = {};

  constructor(
    public modalController: ModalController
    ) {}

  ngOnInit() {}

  async cancel() {
    await this.modalController.dismiss({action: 'dismiss'});
  }

  async save() {
    await this.modalController.dismiss({action: 'save', result: this.newTask});
  }
}
