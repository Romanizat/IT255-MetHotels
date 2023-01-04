import {Component, OnInit} from '@angular/core';
import {Room} from "../models/room.model";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  rooms: Room[] = [];

  ngOnInit(): void {
    this.rooms.push(new Room(1, "Soba sa pogledom na grad", 199, 4));
    this.rooms.push(new Room(2, "Soba sa pogledom na more", 299, 5));
  }
}
