import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";

@Injectable({
  providedIn: "root",
})
export class LaboratoryService {
  constructor(private _http: HttpClient) {}

  listLaboratory() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/laboratories/doctor/` + localStorage.getItem("userId"),
      {
        headers: reqHeader,
      }
    );
  }
}
