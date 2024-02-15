import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Wallet } from '../shared/modeli/wallet/Wallet';
import { WalletService } from '../services/wallet/wallet.service';
@Component({
  selector: 'app-wallet-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet-page.component.html',
  styleUrl: './wallet-page.component.css'
})
export class WalletPageComponent {
  wallet!:Wallet;
  constructor (private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private walletService: WalletService,
    private cartService: CartService,) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.wallet = walletService.getWalletById(params['id']);
    })
  }
  addToCart(){
    this.cartService.addToCart(this.wallet);
    this.router.navigateByUrl('/cart-page');
  }
}
