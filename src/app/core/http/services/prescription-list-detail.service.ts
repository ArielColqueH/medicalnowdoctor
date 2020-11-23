import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { config } from "src/app/models/auth/config";

@Injectable({
  providedIn: "root",
})
export class PrescriptionListDetailService {
  constructor(private _http: HttpClient) {}

  getPrescriptionDetail(prescriptionId: string): Observable<any> {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/prescription/` + prescriptionId + `/detail`,
      {
        headers: reqHeader,
      }
    );
  }
}
