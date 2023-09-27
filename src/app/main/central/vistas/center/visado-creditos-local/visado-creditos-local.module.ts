import {NgModule} from '@angular/core';
import {CoreCommonModule} from '../../../../../../@core/common.module';
import {CommonModule} from '@angular/common';
import {ContentHeaderModule} from '../../../../../layout/components/content-header/content-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';


import {VisadoCreditosLocalRoutingModule} from './visado-creditos-local-routing.module';

import {CoreSidebarModule} from '../../../../../../@core/components';
import {TranslateModule} from '@ngx-translate/core';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {CoreTouchspinModule} from '../../../../../../@core/components/core-touchspin/core-touchspin.module';
import {Ng2FlatpickrModule} from 'ng2-flatpickr';
import {CardSnippetModule} from '../../../../../../@core/components/card-snippet/card-snippet.module';
import {ShareIconsModule} from 'ngx-sharebuttons/icons';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {QRCodeModule} from 'angularx-qrcode';
import {FlatpickrModule} from 'angularx-flatpickr';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatTreeModule} from '@angular/material/tree';
import {SolicitudesEmpleadosCenterComponent} from './empleados/solicitudes-empleados-center.component';
import {NegocioPropioCenterComponent} from './negocio-propio/negocio-propio-center.component';
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
import {RevisionDocumentosComponent} from './revision-documentos/revision-documentos.component';
import {ValoresProcesoDigitalComponent} from '../solicitudes-creditos-digitales/valores-proceso-digital/valores-proceso-digital.component';
import {ResumenDigitalComponent} from '../solicitudes-creditos-digitales/resumen-digital/resumen-digital.component';

@NgModule({
    declarations: [
        SolicitudesEmpleadosCenterComponent,
        NegocioPropioCenterComponent,
        NegocioPropioPreaprovadosCenterComponent,
        EmpleadosPreaprovadosCenterComponent,
        MicrocreditosPreAprovadosCenterComponent,
        MicrocreditosNormalesCenterComponent,
        IfisNegocioPropioPreaprovadosCenterComponent,
        IfisEmpleadosPreaprovadosCenterComponent,
        IfisMicrocreditosPreAprovadosCenterComponent,
        RevisionDocumentosComponent,
        ValoresProcesoDigitalComponent,
        ResumenDigitalComponent,
    ],
    imports: [
        VisadoCreditosLocalRoutingModule,
        CoreCommonModule,
        ContentHeaderModule,
        TranslateModule,
        SwiperModule,
        FormsModule,
        CoreTouchspinModule,
        CoreSidebarModule,
        NgbModule,
        Ng2FlatpickrModule,
        CardSnippetModule,
        ShareIconsModule,
        ShareButtonsModule,
        QRCodeModule,
        FlatpickrModule.forRoot(),
        NgSelectModule,
        NgxDatatableModule,
        MatTreeModule,
        CommonModule
    ]
})
export class VisadoCreditosLocalModule {
}
