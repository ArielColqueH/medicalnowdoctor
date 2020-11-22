import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";
import { PrescriptionJSON } from "src/app/models/prescription-json";

@Injectable({
  providedIn: "root",
})
export class DarprescripcionService {
  constructor(private _http: HttpClient) {}
  crearDiagnostico(consultId: number, prescripcion: PrescriptionJSON) {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/prescription/` + consultId + `/add/detail`,
      prescripcion,
      {
        headers: reqHeader,
      }
    );
  }
}
