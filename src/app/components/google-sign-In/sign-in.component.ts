import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public totalItem : number = 0 ;
  constructor(private authService: AuthService,private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
          this.totalItem = res.length;
      })
  }

  signInWithGoogle(){
    this.authService.loginViaGoogle();
  }


}
