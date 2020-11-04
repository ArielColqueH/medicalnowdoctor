import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/models/auth/config';
import { UserConfigurationModel } from 'src/app/models/user-configuration-model';

@Injectable({
  providedIn: 'root'
})
export class UserConfigurationService {

  constructor(private _http: HttpClient) { }
  obtenerDatosConfiguration(){
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
    Authorization: "bearer " + tokenUser,
  });
  return this._http.get<UserConfigurationModel[]>(`${config.apiUrl}/user/config/`+localStorage.getItem("userId"), {
    headers: reqHeader,
 });
}
}
