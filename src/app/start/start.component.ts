import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  token= environment.token;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

      if(environment.token == ""){
        alert("Sua seção expirou, faça o login novamente.")
        this.router.navigate(["/login"])
      }
}
}
