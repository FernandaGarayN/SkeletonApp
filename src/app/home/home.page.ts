import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController, NavController } from '@ionic/angular';


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

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private animationCtrl: AnimationController // Importa AnimationController
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params && params['user']) {
        this.usuario = params['user'];
      } else {
        this.navCtrl.navigateForward('/login');
      }
    });
  }

  animateTitle() {
    const titleElement = document.querySelector('ion-title h4');
    console.log("titleElement: " + titleElement);
    if (titleElement) {
      const titleAnimation = this.animationCtrl
        .create()
        .addElement(titleElement)
        .duration(2500)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, transform: 'translateX(0%)', opacity: '1' }, // Posición inicial con opacidad 1
          { offset: 0.5, transform: 'translateX(50%)', opacity: '0.2' }, // Avance y opacidad 0.2
          { offset: 1, transform: 'translateX(0%)', opacity: '1' } // Posición final con opacidad 1
        ]);

      titleAnimation.play();
    }
  }

  animateInputs() {
    const input1 = document.querySelector('ion-item:nth-of-type(1) ion-input');
    const input2 = document.querySelector('ion-item:nth-of-type(2) ion-input');
    
    console.log("input1: " + input1);
    console.log("input2: " + input2);

    if (input1 && input2) {
      const inputsAnimation = this.animationCtrl
        .create()
        .addElement(input1)
        .addElement(input2)
        .duration(1000)
        .keyframes([
          { offset: 0, transform: 'translateX(0%)'},
          { offset: 1, transform: 'translateX(100%)'} // Avance y opacidad 0.2
          ]);

      inputsAnimation.play();
      return inputsAnimation;
    }
    return null;
  }

  clean() {
    // Llama a la función animateInputs y guarda la animación en una variable
    const animation = this.animateInputs();
    if(animation){
      animation.afterAddWrite(() => {
      // Una vez que la animación ha terminado, borra los textos
      this.nombre = '';
      this.apellido = '';
      this.nivelEducacional = '';
      this.fechaDeNacimiento = new Date().toISOString();
    });
    }
  
    // Espera a que termine la animación
    
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    this.animateTitle(); // Llama a la animación del título en la carga de la página
    this.animateInputs();
  }
}
