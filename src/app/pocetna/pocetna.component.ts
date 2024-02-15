import { Component, OnInit } from '@angular/core';
import { BagService } from '../services/bag/bag.service';
import { WalletService } from '../services/wallet/wallet.service';
import { CommonModule } from '@angular/common';
import { Bag } from '../shared/modeli/bags/Bag';
import { Wallet } from '../shared/modeli/wallet/Wallet';
import { ActivatedRoute } from '@angular/router';
import { TagsComponent } from '../tags/tags.component';
import { RouterLink } from '@angular/router';
import { WalletComponent } from '../wallet/wallet.component';
@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [CommonModule,TagsComponent,RouterLink, WalletComponent],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css'
})
export class PocetnaComponent implements OnInit
{
  
  bags: Bag[] = [];
  wallets : Wallet[] = [];
 constructor(private bagService: BagService, 
  private walletService: WalletService, 
  private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['tag']) {
        this.bags = this.bagService.getAllBagsByTag(params['tag']);
        this.wallets = this.walletService.getAllWalletsByTag(params['tag']);
      } 
      else 
      {
        this.bags = this.bagService.getAll();
        this.wallets = this.walletService.getAll();
      }

    });
  }
}

