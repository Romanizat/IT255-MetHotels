import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../models/room.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor(private http: HttpClient) {
  }

  getPrice(numberOfNights: number, price: number): number {
    return numberOfNights * price;
  }

  saveRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${environment.apiUrl}/rooms`, room, {responseType: "json"});
  }

  update(room: Room): Observable<Room> {
    return this.http.put<Room>(`${environment.apiUrl}/rooms`, room, {responseType: "json"});
  }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${environment.apiUrl}/rooms`, {responseType: "json"});
  }

  getRoomById(roomId: number): Observable<Room> {
    return this.http.get<Room>(`${environment.apiUrl}/rooms/${roomId}`, {responseType: "json"});
  }

  deleteRoom(roomId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/rooms/${roomId}`, {responseType: "json"});
  }
}
