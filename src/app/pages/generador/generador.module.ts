import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneradorRoutingModule } from './generador-routing.module';
import { GeneradorComponent } from './generador.component';
import { SecuencialComponent } from './pages/secuencial/secuencial.component';
import { AleatorioComponent } from './pages/aleatorio/aleatorio.component';
import { AmexComponent } from './pages/amex/amex.component';


@NgModule({
  declarations: [
    GeneradorComponent,
    SecuencialComponent,
    AleatorioComponent,
    AmexComponent
  ],
  imports: [
    CommonModule,
    GeneradorRoutingModule
  ]
})
export class GeneradorModule { }
