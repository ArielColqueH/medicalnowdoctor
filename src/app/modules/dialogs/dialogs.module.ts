import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { DetallePrescripcionComponent } from "./detalle-prescripcion/detalle-prescripcion.component";
import { FormsModule } from "@angular/forms";
import { DarAltaComponent } from "./dar-alta/dar-alta.component";
import { DarDiagnosticoComponent } from "./dar-diagnostico/dar-diagnostico.component";
import { MiniChatComponent } from "./mini-chat/mini-chat.component";
import { ActivarConsultaComponent } from "./activar-consulta/activar-consulta.component";
import { DetallePrescripcionVistaComponent } from "./detalle-prescripcion-vista/detalle-prescripcion-vista.component";

@NgModule({
  declarations: [
    DetallePrescripcionComponent,
    DarAltaComponent,
    DarDiagnosticoComponent,
    MiniChatComponent,
    ActivarConsultaComponent,
    DetallePrescripcionVistaComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  entryComponents: [
    DetallePrescripcionComponent,
    DarAltaComponent,
    DarDiagnosticoComponent,
    MiniChatComponent,
    ActivarConsultaComponent,
    DetallePrescripcionVistaComponent,
  ],
})
export class DialogsModule {}
