import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, Observable, of} from 'rxjs';
import {User} from '../shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getUser(): Observable<User> {
    return of({name: "Sasha", id: 1, email: ""}).pipe(
      delay(1000)
    )
  }


}
