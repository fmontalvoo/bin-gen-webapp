import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

import { Card } from '../../models/card.model';

const TARJETAS: string = '/cards';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private afs: AngularFirestore) { }

  public registrarTarjeta(tarjeta: Card): Promise<void> {
    return this.afs.
      collection<Card>(TARJETAS)
      .doc(tarjeta.number)
      .set(tarjeta);
  }

  public obtenerTarjetas() {
    return this.afs
      .collection<Card>(TARJETAS)
      .snapshotChanges()
      .pipe(
        map(
          doc => {
            if (doc) {
              const cards = doc.map(
                data => {
                  const payload = data.payload.doc;
                  const card = payload.data();
                  card.id = payload.id;
                  return card;
                }
              );
              return cards;
            }
            return [];
          }
        )
      );
  }
}
