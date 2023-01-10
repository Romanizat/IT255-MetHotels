import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor() {
  }

  getPrice(numberOfNights: number, price: number): number {
    return numberOfNights * price;
  }
}
