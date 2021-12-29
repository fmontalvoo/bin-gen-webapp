import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { GeneradorRoutingModule } from './generador-routing.module';
import { GeneradorComponent } from './generador.component';
import { SecuencialComponent } from './pages/secuencial/secuencial.component';
import { AleatorioComponent } from './pages/aleatorio/aleatorio.component';
import { AmexComponent } from './pages/amex/amex.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneradorRoutingModule,
    AngularFirestoreModule,
  ],
  declarations: [
    GeneradorComponent,
    SecuencialComponent,
    AleatorioComponent,
    AmexComponent
  ],
})
export class GeneradorModule { }
