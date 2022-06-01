import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  //anotação para importar uma variável que está em outro Service: 
  @Input() message: string;
  @Input() type: string = "success"; //já definiu o tipo que vai receber(=) (success)

  constructor(
    public modal: BsModalRef,
  ) { }

  ngOnInit(){
  }

  onClose(){
    this.modal.hide()
    //chama o modal e esconde
  }
}
