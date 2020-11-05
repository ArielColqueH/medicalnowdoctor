import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/models/auth/config';
import { UserConfigurationModel } from 'src/app/models/user-configuration-model';
import { Observable } from 'rxjs';

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


  public datosActualizadosFromRemote(user: UserConfigurationModel):Observable<any>{
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
    Authorization: "bearer " + tokenUser,
  });
    return this._http.post<UserConfigurationModel>(`${config.apiUrl}/user/config/update/`+localStorage.getItem("userId"),{
      headers: reqHeader,
    });
  }


}
