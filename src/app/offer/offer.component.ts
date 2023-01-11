import {Component, OnInit} from '@angular/core';
import {Room} from "../models/room.model";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  room = new Room(1, "Soba sa pogledom na grad", 199, 4, false, false, false);
  room2 = new Room(2, "Soba sa pogledom na more", 299, 5, false, false, false);
  room3 = new Room(3, "Soba sa 3 spavace sobe", 399, 6, false, false, false);
  rooms: Room[] = [];

  ngOnInit(): void {
    this.rooms.push(this.room);
    this.rooms.push(this.room2);
    this.rooms.push(this.room3);
  }
}
