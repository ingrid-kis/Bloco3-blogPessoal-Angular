import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(message: string, tipo: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
    //criou uma Constante bsModalRef que vai receber esse (this.bsModalService) pra mostrar o componente (AlertasComponent) como u m MODAL 
    bsModalRef.content.type = tipo
    bsModalRef.content.message = message
    //conteúdos do modal: Tipo e message
  }

  showAlertDanger(message: string){
    this.showAlert(message, "danger")
  }

  showAlertSuccess(message: string){
    this.showAlert(message, "success") //(message e tipo)
  }

  showAlertInfo(message: string){
    this.showAlert(message, "info")
  }
}
