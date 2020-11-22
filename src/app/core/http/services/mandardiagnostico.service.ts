import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";
import { DiagnosisModel } from "src/app/models/diagnosis-model";

@Injectable({
  providedIn: "root",
})
export class MandardiagnosticoService {
  constructor(private _http: HttpClient) {}

  enviarDiagnostico(consultId: string, diagnostico: DiagnosisModel) {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/consult/add/diagnosis/` + consultId,
      diagnostico,
      {
        headers: reqHeader,
      }
    );
  }
}
