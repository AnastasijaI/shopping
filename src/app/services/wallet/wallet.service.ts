import { Injectable } from '@angular/core';
import { Wallet } from '../../shared/modeli/wallet/Wallet';
import { Tag } from '../../shared/modeli/tag/Tag';
@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor() { }

  getWalletById(id: number): Wallet{
    return this.getAll().find(wallet => wallet.id == id)!;
  }

  getAllTags():Tag[]{
    return [
      {name: 'Wallet'},
    ];
   }
  getAllWalletsByTag(tag: string): Wallet[] {
    return tag === "All"
      ? this.getAll()
      : this.getAll().filter(wallet => wallet.tags?.includes(tag));
  }
  
 

  getAll(): Wallet[]{
    return [
      {
          id:1,
          name:'Stylish Black Wallet',
          price: 50,
          tags: ['Black','Wallet'],
          favorite: false,
          imageUrl: '/assets/sliki/w5.jpg',
          origins: ['monaco'],
          color: 'black',
      },
      {
        id:2,
        name:'Classic Dior',
        price: 65,
        tags: ['Black','Wallet','Dior'],
        favorite: true,
        imageUrl: '/assets/sliki/w2.jpg',
        origins: ['french'],
        color: 'black',
      },
      {
        id:3,
        name:'Elegant LV',
        price: 100,
        tags: ['Brown','Wallet'],
        favorite: true,
        imageUrl: '/assets/sliki/w3.jpg',
        origins: ['french'],
        color: 'brown',
      },
      {
          id:4,
          name:'Red Lady',
          price: 75,
          tags: ['Red','Wallet'],
          favorite: false,
          imageUrl: '/assets/sliki/w4.jpg',
          origins: ['french'],
          color: 'red',
      },
  ]
  }
}
