import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {userLoad} from '../../store/user.actions';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  inputValue = new FormControl<string | null>(null);

  routes = inject(Router);

  private store = inject(Store)

  public onLogin(): void {
    localStorage.setItem('token', JSON.stringify(this.inputValue.value));
    // this.routes.navigate(['login']);

    this.store.dispatch(userLoad())
  }
}
