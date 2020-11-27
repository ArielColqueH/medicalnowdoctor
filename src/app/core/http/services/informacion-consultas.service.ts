import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";
import { DoctorInfoModel } from "src/app/models/doctor-info-model";

@Injectable({
  providedIn: "root",
})
export class InformacionConsultasService {
  constructor(private _http: HttpClient) {}

  getUserInfoConsult() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/user/` +
        localStorage.getItem("userId") +
        `/doctor/info`,
      {
        headers: reqHeader,
      }
    );
  }
  updateUserInfoConsult(doctor: DoctorInfoModel) {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/user/` +
        localStorage.getItem("userId") +
        `/update/doctor/info`,
      doctor,
      {
        headers: reqHeader,
      }
    );
  }
}
