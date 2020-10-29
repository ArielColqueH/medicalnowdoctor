import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./layout/main/main.component";
import { AsistenciaBaseComponent } from "./modules/home/pages/home/asistencia-base/asistencia-base.component";
import { AsistenciaMedicaComponent } from "./modules/home/pages/home/asistencia-base/asistencia-medica/asistencia-medica.component";
import { ListaEspecialidadesComponent } from "./modules/home/pages/home/asistencia-base/asistencia-medica/lista-especialidades/lista-especialidades.component";
import { ListaEspecialistasComponent } from "./modules/home/pages/home/asistencia-base/asistencia-medica/lista-especialidades/lista-especialistas/lista-especialistas.component";

import { ConfiguracionesComponent } from "./modules/home/pages/home/configuraciones/configuraciones.component";
import { HistorialComponent } from "./modules/home/pages/home/historial/historial.component";
import { HomeComponent } from "./modules/home/pages/home/home.component";
import { LaboratoriosComponent } from "./modules/home/pages/home/laboratorios/laboratorios.component";
import { RecetasComponent } from "./modules/home/pages/home/recetas/recetas.component";
import { LoginComponent } from "./modules/home/pages/login/login.component";
import { RegistroComponent } from "./modules/home/pages/registro/registro.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "registro",
    component: RegistroComponent,
  },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "asistencia-medica",
        component: AsistenciaBaseComponent,
        children: [
          {
            path: "",
            component: AsistenciaMedicaComponent,
          },
          {
            path: "lista-especialidades",
            children: [
              {
                path: "",
                component: ListaEspecialidadesComponent,
              },
              {
                path: "lista-especialistas",
                component: ListaEspecialistasComponent,
              },
            ],
          },
        ],
      },
      {
        path: "recetas",
        component: RecetasComponent,
      },
      {
        path: "historial",
        component: HistorialComponent,
      },
      {
        path: "laboratorios",
        component: LaboratoriosComponent,
      },
      {
        path: "configuraciones",
        component: ConfiguracionesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
