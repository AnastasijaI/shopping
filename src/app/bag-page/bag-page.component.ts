import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Bag } from '../shared/modeli/bags/Bag';
import { BagService } from '../services/bag/bag.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-bag-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bag-page.component.html',
  styleUrl: './bag-page.component.css'
})
export class BagPageComponent {
  bag!:Bag;
  
  constructor (private activatedRoute: ActivatedRoute, 
  private router: Router,
  private bagService: BagService,
  private cartService: CartService, ) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.bag = bagService.getBagById(params['id']);
    })
  }
  addToCart(){
    this.cartService.addToCart(this.bag);
    this.router.navigateByUrl('/cart-page');
  }


}

