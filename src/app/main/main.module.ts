import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { NuestrosLogrosComponent } from './nuestros-logros/nuestros-logros.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    CarruselComponent,
    ConocenosComponent,
    MisionVisionComponent,
    NuestrosLogrosComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MainComponent]
})
export class MainModule { }
