import { HttpHeaders } from '@angular/common/http';

export class Server {
  public static readonly HTTP_HEADERS: HttpHeaders = new HttpHeaders().append(
    'content-type',
    'application/json'
  );
}
