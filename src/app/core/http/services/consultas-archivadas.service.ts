import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";

@Injectable({
  providedIn: "root",
})
export class ConsultasArchivadasService {
  constructor(private _http: HttpClient) {}

  getChatArchivados() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/consult/` +
        localStorage.getItem("userId") +
        `/stored/consults`,
      {
        headers: reqHeader,
      }
    );
  }
}
