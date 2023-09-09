import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario!: string;
  nombre!: string;
  apellido!: string;
  nivelEducacional!: string;
  fechaDeNacimiento: string = new Date().toISOString();
  
  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      if (params && params['user']) {
        this.usuario = params['user'];
      } else {
        this.navCtrl.navigateForward('/login');
      }
    })
  }
  clean(){
    this.nombre = "";
    this.apellido = "";
    this.nivelEducacional = "";
    this.fechaDeNacimiento = new Date().toISOString();

  }

}
