import { Injectable } from '@angular/core';
import { Bag } from '../../shared/modeli/bags/Bag';
import { Tag } from '../../shared/modeli/tag/Tag';
@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor() { }

  getBagById(id: number): Bag{
    return this.getAll().find(bag => bag.id == id)!;
  }
  getAllTags():Tag[]{
    return [
      {name: 'All'},
      {name: 'Bag'},
      {name: 'Black'},
      {name: 'Red'},
      {name: 'Blue'},
    ];
  }  
  getAllBagsByTag(tag: string): Bag[] {
    return tag === "All"
      ? this.getAll()
      : this.getAll().filter(bag => bag.tags?.includes(tag));
  }
  getAll(): Bag[]{
    return [
      {
          id:1,
          name:'Stylish Black Tote Bag',
          price: 100,
          tags: ['Black','Bag', 'Stylish'],
          favorite: false,
          imageUrl: '/assets/sliki/c3crna.jpg',
          origins: ['monaco'],
          color: 'black',
      },
      {
        id:2,
        name:'Classic Leather Bag',
        price: 150,
        tags: ['Red','Bag'],
        favorite: true,
        imageUrl: '/assets/sliki/c3crvena.jpg',
        origins: ['monaco'],
        color: 'red',
      },
      {
        id:3,
        name:'Elegant Evening Clutch',
        price: 200,
        tags: ['Black','Bag'],
        favorite: true,
        imageUrl: '/assets/sliki/c4crna.jpg',
        origins: ['italy'],
        color: 'black',
      },
      {
          id:4,
          name:'Sporty Red Backpack',
          price: 150,
          tags: ['Red','Bag'],
          favorite: false,
          imageUrl: '/assets/sliki/c4crvena.jpg',
          origins: ['italy'],
          color: 'red',
      },
      {
        id:5,
        name:'Blue Ocean',
        price: 200,
        tags: ['Blue','Bag'],
        favorite: false,
        imageUrl: '/assets/sliki/c4plava.jpg',
        origins: ['italy'],
        color: 'blue',
      },
      {
        id:6,
        name:'Elegant Black Madona',
        price: 100,
        tags: ['Black','Bag'],
        favorite: true,
        imageUrl: '/assets/sliki/c5.jpg',
        origins: ['paris'],
        color: 'black',
    },
  ]
  }
 
}
