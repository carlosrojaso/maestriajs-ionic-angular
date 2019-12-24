import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss'],
})
export class AddformComponent implements OnInit {
  newTask: any = {};
  isEditing = false;

  constructor(
    public modalController: ModalController,
    private navParams: NavParams
    ) {}

  ngOnInit() {
    if (this.navParams && this.navParams.get('taskToEdit')) {
      this.isEditing = true;
      this.newTask = this.navParams.get('taskToEdit');
    }
  }

  async cancel() {
    await this.modalController.dismiss({action: 'dismiss'});
  }

  async save() {
    if (!this.isEditing) {
      await this.modalController.dismiss({action: 'save', result: this.newTask});
    } else {
      await this.modalController.dismiss({action: 'edit', result: this.newTask});
    }
    this.isEditing = false;
  }
}
