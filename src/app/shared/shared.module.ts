import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ShortenerPipe } from '../shortener.pipe';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ShortenerPipe],
  exports: [HeaderComponent, FooterComponent, ShortenerPipe],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class SharedModule { }
