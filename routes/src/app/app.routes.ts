import { Routes } from '@angular/router';
import { ShopOneComponent } from './components/shop-one/shop-one.component';
import { ShopTwoComponent } from './components/shop-two/shop-two.component';
import { AllShopComponent } from './components/all-shop/all-shop.component';
import { LoginComponent } from './components/login/login.component';
import { WrapComponent } from './components/wrap/wrap.component';
import { loginGuard } from './Login.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'app',
    component: WrapComponent,
    // canActivate: [loginGuard],
    children: [
      {
        path: 'allShop',
        component: AllShopComponent,
        children: [
          {
            path: 'shop-1',
            component: ShopOneComponent,
            title: 'Shop-1',
          },
          {
            path: 'shop-2',
            component: ShopTwoComponent,
            title: 'Shop-2',
          },
        ],
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'app/allShop',
  },
];
