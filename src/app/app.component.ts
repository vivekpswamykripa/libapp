import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryApp';
  constructor(public _auth:AuthService,
    private _router:Router){

}
logoutUser()
{
localStorage.removeItem('token')
this._router.navigate(['/books'])
this._router.navigate(['/authors'])

}
loggedUser()
{
  this._router.navigate(['/add'])
  this._router.navigate(['/update'])
  this._router.navigate(['/delete'])
}
}
