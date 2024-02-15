import { Routes } from '@angular/router';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { BagPageComponent } from './bag-page/bag-page.component';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { PovekeComponent } from './poveke/poveke.component';
import { NajavaComponent } from './najava/najava.component';
import { WalletComponent } from './wallet/wallet.component';
import { AnketaComponent } from './anketa/anketa.component';
import { RouterModule } from '@angular/router';
export const routes: Routes = [
  { path: '', component: PocetnaComponent },
  { path: 'pocetna', component: PocetnaComponent },
  { path: 'tag/:tag', component: PocetnaComponent },
  { path: 'bag/:id', component: BagPageComponent },
  { path: 'wallet/:id', component: WalletPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'poveke', component: PovekeComponent },
  { path: 'najava', component: NajavaComponent },
  { path: 'anketa', component: AnketaComponent },
  { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
];
