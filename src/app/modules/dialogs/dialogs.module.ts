import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { DetallePrescripcionComponent } from "./detalle-prescripcion/detalle-prescripcion.component";
import { FormsModule } from "@angular/forms";
import { DarAltaComponent } from "./dar-alta/dar-alta.component";
import { DarDiagnosticoComponent } from "./dar-diagnostico/dar-diagnostico.component";

@NgModule({
  declarations: [
    DetallePrescripcionComponent,
    DarAltaComponent,
    DarDiagnosticoComponent,
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
  ],
})
export class DialogsModule {}
