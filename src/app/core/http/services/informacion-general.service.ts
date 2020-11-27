import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";
import { User } from "src/app/models/user";

@Injectable({
  providedIn: "root",
})
export class InformacionGeneralService {
  constructor(private _http: HttpClient) {}

  getUserInfo() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/user/` + localStorage.getItem("userId") + `/config`,
      {
        headers: reqHeader,
      }
    );
  }

  updateUserInfo(usuario: User) {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/user/` +
        localStorage.getItem("userId") +
        `/config/update`,
      usuario,
      {
        headers: reqHeader,
      }
    );
  }
}
