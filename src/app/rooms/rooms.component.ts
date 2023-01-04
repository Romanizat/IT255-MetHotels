import {Component} from '@angular/core';
import {Room} from "../models/room.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  rooms: Room[] = [];
  descriptionValid = false;

  roomForm = new FormGroup({
    roomNumber: new FormControl(null, Validators.required),
    floor: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    option: new FormControl(null)
  });

  optionList = [
    {id: 1, name: 'Sauna', price: 100, checked: false},
    {id: 2, name: 'Klima', price: 50, checked: false},
    {id: 3, name: 'Minibar', price: 200, checked: false},
  ];


  addRoom(roomNumber: HTMLInputElement, floor: HTMLInputElement, description: HTMLInputElement, price: HTMLInputElement) {
    let finalPrice = Number(price.value);
    for (let option of this.optionList) {
      if (option.checked) {
        finalPrice += option.price;
      }
    }
    this.rooms.push(new Room(parseInt(roomNumber.value), description.value, finalPrice, parseInt(floor.value)));
    this.roomForm.reset();
  }

  checkDescription(description: string) {
    if (description.length < 6 && this.isControlDirty('description')) {
      console.log("Description is less than 6 characters");
    }
    this.descriptionValid = description.length >= 6;
  }

  isControlDirty(controlName: string) {
    // @ts-ignore
    return this.roomForm.get(controlName).dirty;
  }


}
