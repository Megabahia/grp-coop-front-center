import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../../../../auth/helpers/auth.guards';
import {EmpleadosComponent} from './empleados/empleados.component';
import {NegocioPropioComponent} from './negocio-propio/negocio-propio.component';
import {NegocioPropioPreaprovadosComponent} from './negocio-propio-preaprovados/negocio-propio-preaprovados.component';
import {EmpleadosPreaprovadosComponent} from './empleados-preaprovados/empleados-preaprovados.component';



const routes: Routes = [
    {path: '', redirectTo: 'empleados-center', pathMatch: 'full'},
    {
        path: 'empleados-center',
        component: EmpleadosComponent,
    },
    {
        path: 'negocios-propio-center',
        component: NegocioPropioComponent,
        // data: {roles: [Role.BigPuntos]},
        canActivate: [AuthGuard]
    },
    {
        path: 'negocios-propios-pre-aprobados-center',
        component: NegocioPropioPreaprovadosComponent,
        // data: {roles: [Role.BigPuntos]},
        canActivate: [AuthGuard]
    },
    {
        path: 'empelados-pre-aprobados-center',
        component: EmpleadosPreaprovadosComponent,
        // data: {roles: [Role.BigPuntos]},
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SolicitudesCreditosAutomotrizRoutingModule {
}
