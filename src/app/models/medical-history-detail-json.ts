import { MedicalHistoryDateListModel } from "./medical-history-date-list-model";
import { PatientNameModel } from "./patient-name-model";

export class MedicalHistoryDetailJson {
  patientInfo = new PatientNameModel();
  content: MedicalHistoryDateListModel[] = [];
}
