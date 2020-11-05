import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/models/auth/config';
import { Avatar } from 'src/app/models/avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private _http: HttpClient) { }

  listAvatar(){
    
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
    Authorization: "bearer " + tokenUser,
  });
  return this._http.get<Avatar[]>(`${config.apiUrl}/user/`+localStorage.getItem("userId"), {
    headers: reqHeader,
 });
}
}
