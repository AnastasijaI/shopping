import { Component, OnInit } from '@angular/core';
import { BagService } from '../services/bag/bag.service';
import { WalletService } from '../services/wallet/wallet.service';
import { Tag } from '../shared/modeli/tag/Tag';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {
  tags: Tag[]=[];
  constructor(private bagService:BagService,
     private walletService:WalletService) {}
  ngOnInit(): void{
    // this.tags = this.bagService.getAllTags();
    // this.tags = this.walletService.getAllTags();
    const bagTags = this.bagService.getAllTags();
    const walletTags = this.walletService.getAllTags();
    this.tags = bagTags.concat(walletTags);

  }
}
