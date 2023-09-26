import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';


import {SolicitudesCreditosAutomotrizRoutingModule} from './solicitudes-creditos-automotriz-routing.module';
import {EmpleadosComponent} from './empleados/empleados.component';
import {EmpleadosPreaprovadosComponent} from './empleados-preaprovados/empleados-preaprovados.component';
import {NegocioPropioComponent} from './negocio-propio/negocio-propio.component';
import {NegocioPropioPreaprovadosComponent} from './negocio-propio-preaprovados/negocio-propio-preaprovados.component';
import {AlfaComponent} from './alfa/alfa.component';

import {TranslateModule} from '@ngx-translate/core';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {Ng2FlatpickrModule} from 'ng2-flatpickr';
import {ShareIconsModule} from 'ngx-sharebuttons/icons';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {QRCodeModule} from 'angularx-qrcode';
import {FlatpickrModule} from 'angularx-flatpickr';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatTreeModule} from '@angular/material/tree';
import {AutomotrizRevisionDocumentosComponent} from './automotriz-revision-documentos/automotriz-revision-documentos.component';
import {ContentHeaderModule} from '../../../../../../layout/components/content-header/content-header.module';
import {CoreCommonModule} from '../../../../../../../@core/common.module';
import {CoreTouchspinModule} from '../../../../../../../@core/components/core-touchspin/core-touchspin.module';
import {CoreSidebarModule} from '../../../../../../../@core/components';
import {CardSnippetModule} from '../../../../../../../@core/components/card-snippet/card-snippet.module';


@NgModule({
    declarations: [
        AlfaComponent,
        EmpleadosComponent,
        EmpleadosPreaprovadosComponent,
        NegocioPropioComponent,
        NegocioPropioPreaprovadosComponent,
        AutomotrizRevisionDocumentosComponent,
    ],
    imports: [
        SolicitudesCreditosAutomotrizRoutingModule,
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
export class SolicitudesCreditosAutomotrizModule {
}
