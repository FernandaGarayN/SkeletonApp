import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario!: string;
  password!: number;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
login (){
  console.log("usuario: "+this.usuario);
  console.log("password: "+this.password);
  if(this.usuario == "Fernanda" && this.password == 1234){
    this.navCtrl.navigateForward('/home', {
      queryParams: { user: this.usuario }
    });
  } else {
    alert ('Usuario o contraseña incorrectos. ');
  }
}

}
