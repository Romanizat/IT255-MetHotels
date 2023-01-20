export class Room {
  id: number;
  roomNumber: number;
  description: string;
  price: number;
  floor: number;
  sauna: boolean;
  airCondition: boolean;
  miniBar: boolean;

  // Entitet Room je predstavljen kao model u Angular aplikaciji.


  constructor(roomNumber: number, description: string, price: number, floor: number, sauna: boolean, airCondition: boolean, minibar: boolean) {
    this.roomNumber = roomNumber;
    this.description = description;
    this.price = price;
    this.floor = floor;
    this.sauna = sauna;
    this.airCondition = airCondition;
    this.miniBar = minibar;
  }
}
