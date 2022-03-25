import { Injectable } from '@angular/core';
import { Luhn } from 'src/app/core/utils/luhn';

@Injectable({
  providedIn: 'root'
})
export class CardGeneratorService {

  constructor() { }

  public random(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  public generateCVV(): string {
    return `${this.random(0, 9)}${this.random(0, 9)}${this.random(0, 9)}`;
  }

  public generateValidThru(): string {
    let month = this.random(1, 12);
    const year = new Date().getFullYear();
    let yearRange = this.random(1, 4);
    return `${month < 10 ? '0' + month : month}|${year + yearRange}`
  }


  public generateRandomCards(number: string, valid: string, cvv: string, limit: number, range: number): Array<string> {
    const cards = [];
    for (let i = 0; i < range; i++) {
      const card = this.generateRandomCard(number, valid, cvv, limit);
      cards.push(card);
    }
    return cards;
  }

  public generateRandomCard(number: string, valid: string, cvv: string, limit: number): string {
    const total = limit - number.length;
    let digits = ''
    for (let i = 0; i < total; i++)
      digits += this.random(0, 9);

    number += digits;

    number = Luhn.generateCheckDigit(number);
    valid = (valid != null && valid.length > 6) ? valid : this.generateValidThru();
    cvv = (cvv != null && cvv.length > 2) ? cvv : this.generateCVV();


    return `${number}|${valid}|${limit != 14 ? cvv : `${cvv}${this.random(0, 9)}`}`;
  }

  public generateSequencialCard(number: string, valid: string, cvv: string, range: number, limit: number): Array<string> {
    console.log('Secuencial', number, valid, cvv, range, limit);
    const total = limit - number.length;
    const max = limit > 14 ? 12 : 11;
    const min = limit > 14 ? 10 : 9;
    let cards = [];
    if (number.length > min && number.length < max) {
      for (let i = 1; i < range; i++) {
        let digits = this.generateSequence(i, total);
        console.log(digits);
        let aux = Luhn.generateCheckDigit(`${number}${digits}`);
        let v = (valid != null && valid.length > 6) ? valid : this.generateValidThru();
        let c = (cvv != null && cvv.length > 2) ? cvv : this.generateCVV();

        cards.push(`${aux}|${v}|${limit != 14 ? c : `${c}${this.random(0, 9)}`}`);
      }
    }
    return cards;
  }

  public generateSequence(index: number, limit: number) {
    let digits = `${index}`;
    while (digits.length < limit) {
      digits = '0' + digits;
    }
    return digits;
  }
}
