import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { AddformComponent } from '../addform/addform.component';
import { NoteDataService } from '../note-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: any = [];
  title = 'ionic-app';
  modal: any;

  constructor(
    public modalController: ModalController,
    private noteDataService: NoteDataService,
    ) {}

  ngOnInit() {
    this.getNotes();
  }

  delete(id) {
    const taskToDelete = this.items.findIndex((item) => (item.id === id));
    this.noteDataService.deleteTask(id).subscribe(
      () => {
        this.items.splice(taskToDelete, 1);
      }
    );
  }

  edit(task) {
    console.log('edit');
    const taskToEdit = this.getTask(task.id);

    this.noteDataService.putTask(task).subscribe(
      () => {
        this.items[taskToEdit] = task;
      }
    );
  }

  getNotes() {
    this.noteDataService.getTasks(1).subscribe(
      (response: Array<any>) => {
        this.items = response.map((item) => ({id: item.id, name: item.title, description: item.body}));
      }
    );
  }

  getTask(id) {
    return this.items.find(item => item.id === id);
  }

  async openDialog(id?) {
    let taskToSend = {};
    const modalProps: any = {
      component: AddformComponent
    };

    if (id) {
      taskToSend = this.getTask(id);
      modalProps.componentProps = {taskToEdit: taskToSend};
    }

    this.modal = await this.modalController.create(modalProps);

    this.modal.present();
    const { data } = await this.modal.onWillDismiss();

    switch (data.action) {
      case 'save':
        this.save(data.result);
        break;
      case 'edit':
        this.edit(data.result);
        break;
    }
  }

  save(newTask) {
    console.log('save', newTask);
    const newIndex = this.items.length + 1;
    newTask.id = newIndex;
    this.noteDataService.createTask(newTask).subscribe(
      () => {
        this.items.push(newTask);
      }
    );
  }
}
