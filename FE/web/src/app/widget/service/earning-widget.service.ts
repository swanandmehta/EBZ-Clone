import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Server } from 'src/app/shared/constant/server';
import { School } from 'src/app/shared/interface/school';
import { environment } from 'src/environments/environment';
import { EarningWidget } from '../interface/earning-widget';
import { WidgetModule } from '../widget.module';

@Injectable({
  providedIn: 'root',
})
export class EarningWidgetService {
  constructor(private httpClient: HttpClient) {}

  getEarningReport(school: School): Observable<EarningWidget> {
    return this.httpClient.get<EarningWidget>(
      environment.server.url + '/reports/school/earning',
      {
        headers: Server.HTTP_HEADERS,
        params: new HttpParams().append('schoolId', school.id),
      }
    );
  }
}
