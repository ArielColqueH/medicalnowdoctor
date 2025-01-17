import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";

@Injectable({
  providedIn: "root",
})
export class ActivarConsultasService {
  constructor(private _http: HttpClient) {}
  activarChat(consultId: number) {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/consult/activate/` + consultId,
      consultId,
      {
        headers: reqHeader,
      }
    );
  }
}
