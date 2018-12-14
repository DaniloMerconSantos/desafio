import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { User } from '../shared/model/user/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  users: User = new User();
  userForm = new FormGroup({
    'name' : new FormControl(this.users.name, [
      Validators.required,
    ]),
    'cpf' : new FormControl(this.users.cpf, [
      Validators.required,
    ]),
    'email' : new FormControl(this.users.email, [
      Validators.required,
      Validators.email,
    ]),
    'senha' : new FormControl(this.users.senha, [
      Validators.required,
    ]),
    'telefone' : new FormControl(this.users.telefone, [
      Validators.required,
    ])
  });

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.userFormControl;
  }

}
