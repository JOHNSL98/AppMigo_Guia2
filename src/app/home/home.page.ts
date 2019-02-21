import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BdiasPage } from '../bdias/bdias.page';
import { BnochesPage } from '../bnoches/bnoches.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl: NavController){

  }
  goBdiasPage(){
    this.navCtrl.navigateRoot('/bdias');
  }

  goBnochesPage(){
    this.navCtrl.push(BnochesPage);
  }
}
