import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wallet } from '../shared/modeli/wallet/Wallet';
import { WalletService } from '../services/wallet/wallet.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent {
  wallets : Wallet[] = [];
  constructor(private walletService: WalletService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['tag']) {
        
        this.wallets = this.walletService.getAllWalletsByTag(params['tag']);
      } 
      else 
      {
        this.wallets = this.walletService.getAll();
      }

    });
  }
}
