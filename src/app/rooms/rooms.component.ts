import {Component, OnInit} from '@angular/core';
import {Room} from "../models/room.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoomServiceService} from "../services/room-service.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[] | undefined = [];
  descriptionValid = false;
  editingRoomId: number;


  constructor(private roomService: RoomServiceService) {
  }

  ngOnInit(): void {
    this.getAllRooms();
  }

  roomForm = new FormGroup({
    roomNumber: new FormControl(0, Validators.required),
    numberOfNights: new FormControl(0, Validators.required),
    floor: new FormControl(0, Validators.required),
    description: new FormControl("", Validators.required),
    price: new FormControl(0, Validators.required),
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
    const numberOfNights = this.roomForm?.get('numberOfNights')?.value;
    if (numberOfNights != null) {
      finalPrice = this.roomService.getPrice(numberOfNights, finalPrice);
    }
    const room = new Room(parseInt(roomNumber.value), description.value, finalPrice, parseInt(floor.value), this.optionList[0].checked, this.optionList[1].checked, this.optionList[2].checked);
    if (this.editingRoomId) {
      room.id = this.editingRoomId;
    }
    this.roomService.saveRoom(room).toPromise().then(() => {
      console.log("Room added");
      this.getAllRooms();
    });
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

  getAllRooms() {
    this.roomService.getAllRooms().toPromise().then(data => {
      this.rooms = data;
    }, err => {
      console.log(err);
    });
  }

  editRoom(room: Room) {
    this.roomForm.reset();
    this.editingRoomId = room.id;

    this.roomForm.get('roomNumber')?.setValue(room.roomNumber);
    this.roomForm.get('floor')?.setValue(room.floor);
    this.roomForm.get('description')?.setValue(room.description);
    this.roomForm.get('price')?.setValue(room.price);
    this.optionList[0].checked = room.sauna;
    this.optionList[1].checked = room.airCondition;
    this.optionList[2].checked = room.miniBar;

  }

  deleteRoom(roomId: number) {
    this.roomService.deleteRoom(roomId).toPromise().then(() => {
      console.log("Room with id " + roomId + " deleted");
      this.getAllRooms();
    }, err => {
      console.log(err);
    });
  }

  getFormControlByName(name: string) {
    return this.roomForm.get(name);
  }


}
