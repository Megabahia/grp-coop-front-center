import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SolicitudPagoEmpleadosService {

    constructor(private _httpClient: HttpClient) {
    }

    public obtenerSolicitudesPagoProveedores(datos) {
        return this._httpClient.post<any>(`${environment.apiUrl}/corp/pagoEmpleados/list/`, datos);
    }

    public actualizarSolicitudesPagoProveedores(datos) {
        return this._httpClient.post<any>(`${environment.apiUrl}/corp/pagoEmpleados/update/${datos._id}`, datos);
    }

    public obtenerSolicitudesPagoEmpleados(datos) {
        return this._httpClient.post<any>(`${environment.apiUrl}/corp/notasPedidos/list/factura/`, datos);
    }
}
