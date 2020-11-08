import { ConversationModel } from "./conversation-model";
import { PatientNameModel } from "./patient-name-model";

export class ChatFromDoctor {
  patientInfo: PatientNameModel = new PatientNameModel();
  content: ConversationModel[];
}
