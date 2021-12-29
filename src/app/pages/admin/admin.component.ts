import { Component, OnInit } from '@angular/core';
import { Card } from '../generador/models/card.model';
import { GeneratorService } from '../generador/services/generator/generator.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public cards!: Card[];

  constructor(private gs: GeneratorService) { }

  ngOnInit(): void {
  this.gs.obtenerTarjetas()
  .subscribe(response => {
    this.cards = response;
  });
  }

}
