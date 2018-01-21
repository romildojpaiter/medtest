import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, ToastController } from 'ionic-angular';
import { Item } from '../../models/item';
import { TranslateService } from '@ngx-translate/core';

import { MainPage } from '../pages';

import { Especialidade, Estado, Status, Medico } from './../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;

  status: Item[];
  estados: Item[];
  especialidades: Item[];
  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  private doctorSaveSuccess: string;

  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController, 
              formBuilder: FormBuilder,
              public _especialidade: Especialidade,
              public _status: Status,
              public _estado: Estado,
              public _medico: Medico,
              public toastCtrl: ToastController,
              public translateService: TranslateService) {

    this.translateService.get('DOCTOR_SAVE_SUCCESS').subscribe((value) => {
      this.doctorSaveSuccess = value;
    })
    
    this.form = formBuilder.group({
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [<any>Validators.required, <any>Validators.email]],
      especialidade: [''],
      ativo: [true],
      status: [''],
      estado: [''],
      cidade: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

  }

  ionViewDidLoad() {
    // Recupera especialidades
    this._especialidade.getAll().subscribe((res: any) => {
      console.log(res['_embedded']);
      this.especialidades = res._embedded.especialidades;
    });

    // Recupera estados
    this._estado.getAll().subscribe((res: any) => {
      console.log(res['_embedded']);
      this.estados = res._embedded.estados;
    });

    // Recupera estados
    this._status.getAll().subscribe((res: any) => {
      console.log(res['_embedded']);
      this.status = res._embedded.status;
    });
    
  }

  createItem() {
    console.log("Estou passando no CreateItem");
  }

  compareDescricaoFn(e1: Item, e2: Item): boolean {    
    return e1 && e2 ? e1.descricao === e2.descricao : e1 === e2;
  }

  compareEstadoFn(e1: Item, e2: Item): boolean {    
    return e1 && e2 ? e1.nome === e2.nome : e1 === e2;
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    console.log("fora do done");
    if (this.form.valid) { 
      console.log("Dentro do done");
      this._medico.salvar(this.form.value).subscribe(
          () => {
            console.log("success");
            this.navCtrl.push(MainPage);
            // Unable to log in
            let toast = this.toastCtrl.create({
              message: this.doctorSaveSuccess,
              duration: 3000,
              position: 'botton'
            });
            toast.present();
            this.viewCtrl.dismiss(this.form.value);
          },
          (err: any) => {
            console.log("fasil");
            // Unable to log in
            let toast = this.toastCtrl.create({
              message: "Ocorreu um erro ao salvar o médico",
              duration: 3000,
              position: 'botton'
            });
            toast.present();
          }
        )
    }
  }

  onChangeAtivo(event) {
    console.log(event);
  }

}
