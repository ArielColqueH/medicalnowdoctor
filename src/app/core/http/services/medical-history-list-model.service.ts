import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";

@Injectable({
  providedIn: "root",
})
export class MedicalHistoryListModelService {
  constructor(private _http: HttpClient) {}

  getMedicalHistoryPatients() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/medical_history/doctor/list/all/` +
        localStorage.getItem("userId"),
      {
        headers: reqHeader,
      }
    );
  }
}
