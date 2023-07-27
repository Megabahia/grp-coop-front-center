import {Injectable} from '@angular/core';
import {environment} from '../../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RecargarLineaCreditosService {

    constructor(private _httpClient: HttpClient) {
    }

    obtenerListaEmpresasCorps(datos) {
        return this._httpClient.post<any>(`${environment.apiUrl}/corp/empresas/list/comercial`, datos);
    }

    obtenerListaEmpresasIfis(datos) {
        return this._httpClient.post<any>(`${environment.apiUrl}/corp/empresas/list/ifis`, datos);
    }

    recargarLineasCreditos(datos) {
        return this._httpClient.post<any>(`${environment.apiUrl}/corp/creditoPersonas/recargar/lineasCreditos`, datos);
    }

    obtenerListaRecargaLineasCredito(datos) {
        return this._httpClient.post<any>(`${environment.apiUrl}/corp/creditoPersonas/listar/recargar/lineasCreditos`, datos);
    }

    actualizarRecargaLinea(data) {
        return this._httpClient.post<any>(`${environment.apiUrl}/corp/creditoPersonas/actualizar/recargar/lineasCreditos/${data.id}`, data);
    }

    verDatosArchivosPreAprobados(id: number) {
        return this._httpClient.get<any>(`${environment.apiUrl}/corp/creditoArchivos/view/creditos/preaprobados/negocios/${id}`);
    }
}
