import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemGroupsComponent } from './pages/item-groups/item-groups.component';
import { ItemsComponent } from './pages/items/items.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'item_groups', component: ItemGroupsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
