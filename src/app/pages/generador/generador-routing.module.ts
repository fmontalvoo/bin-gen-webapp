import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneradorComponent } from './generador.component';
import { AleatorioComponent } from './pages/aleatorio/aleatorio.component';
import { AmexComponent } from './pages/amex/amex.component';
import { SecuencialComponent } from './pages/secuencial/secuencial.component';

const routes: Routes = [
  {
    path: '',
    component: GeneradorComponent,
    children: [
      { path: 'secuencial', component: SecuencialComponent, },
      { path: 'aleatorio', component: AleatorioComponent, },
      { path: 'amex', component: AmexComponent, },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneradorRoutingModule { }
