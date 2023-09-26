import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NegocioPropioCenterComponent} from './negocio-propio/negocio-propio-center.component';
import {SolicitudesEmpleadosCenterComponent} from './empleados/solicitudes-empleados-center.component';
import {NegocioPropioPreaprovadosCenterComponent} from './negocio-propio-preaprovados/negocio-propio-preaprovados-center.component';
import {EmpleadosPreaprovadosCenterComponent} from './empleados-preaprovados/empleados-preaprovados-center.component';
import {MicrocreditosPreAprovadosCenterComponent} from './microcreditos-pre-aprovados/microcreditos-pre-aprovados-center.component';
import {MicrocreditosNormalesCenterComponent} from './microcreditos-normales/microcreditos-normales-center.component';
import {
    IfisNegocioPropioPreaprovadosCenterComponent
} from './ifis/negocio-propio-preaprovados/ifis-negocio-propio-preaprovados-center.component';
import {IfisEmpleadosPreaprovadosCenterComponent} from './ifis/empleados-preaprovados/ifis-empleados-preaprovados-center.component';
import {
    IfisMicrocreditosPreAprovadosCenterComponent
} from './ifis/microcreditos-pre-aprovados/ifis-microcreditos-pre-aprovados-center.component';

const routes: Routes = [
    {path: '', redirectTo: 'empleados-center', pathMatch: 'full'},
    {
        path: 'empleados-center',
        component: SolicitudesEmpleadosCenterComponent,
    },
    {
        path: 'negocios-propio-center',
        component: NegocioPropioCenterComponent,
        // data: {roles: [Role.BigPuntos]},
    },
    {
        path: 'negocios-propios-pre-aprobados-center',
        component: NegocioPropioPreaprovadosCenterComponent,
    },
    {
        path: 'empelados-pre-aprobados-center',
        component: EmpleadosPreaprovadosCenterComponent,
    },
    {
        path: 'microcreditpreaprobado-center',
        component: MicrocreditosPreAprovadosCenterComponent,
    },
    {
        path: 'microcreditsolicitud-center',
        component: MicrocreditosNormalesCenterComponent,
    },
    {
        path: 'ifis/negocios-propios-pre-aprobados-center',
        component: IfisNegocioPropioPreaprovadosCenterComponent,
    },
    {
        path: 'ifis/empelados-pre-aprobados-center',
        component: IfisEmpleadosPreaprovadosCenterComponent,
    },
    {
        path: 'ifis/microcreditpreaprobado-center',
        component: IfisMicrocreditosPreAprovadosCenterComponent,
    },
    {
        path: 'automotriz-local',
        loadChildren: () =>
            import('./solicitudes-creditos-automotriz-local/solicitudes-creditos-automotriz.module')
                .then((m) => m.SolicitudesCreditosAutomotrizModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VisadoCreditosLocalRoutingModule {
}
