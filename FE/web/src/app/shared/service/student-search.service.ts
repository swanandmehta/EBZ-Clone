import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutoCompleteOption } from 'src/app/shared-component/interface/auto-complete-option';
import { environment } from 'src/environments/environment';
import { Server } from '../constant/server';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class StudentSearchService {
  constructor(private httpClient: HttpClient) {}

  search(searchKey: string): Observable<AutoCompleteOption[]> {
    return this.httpClient.get<AutoCompleteOption[]>(
      environment.server.url + '/student/search',
      {
        headers: Server.HTTP_HEADERS,
        params: new HttpParams()
          .append('key', searchKey)
          .append('limit', '5')
          .append('orderby', 'name')
          .append('order', 'asc'),
      }
    );
  }
}
