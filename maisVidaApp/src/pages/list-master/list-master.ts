import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items, Medico, Especialidade } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  
  medicos: Item[] = [];

  constructor(public navCtrl: NavController, 
              public items: Items, 
              public modalCtrl: ModalController,
              public _medico: Medico,
              public _especialidade: Especialidade) {
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    this.getMedicos();
  }

  getMedicos() {
    this._medico.getAll().subscribe(
      (res: any) => {
        console.log(res._embedded.medicos);
        res._embedded.medicos.forEach(element => {
          let item = element;
          this._medico.getEspecialidade(element.id).subscribe(
            (res1: any) => {
              item['especialidade'] = res1.descricao;
            },
            err => {}
          );
          this.medicos.push(item);
        }); ;
        console.log(this.medicos);
      }
    )
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.medicos = [];
    this._medico.delete(item).subscribe(
      res => this.getMedicos()
    );
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
