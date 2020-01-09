import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component'
import {LoginPageComponent} from './login-page/login-page.component'
import { MenuComponent } from './menu/menu.component'
import {InvadersComponent} from './invaders/invaders.component'


const routes: Routes = [
	{
		path: 'leaderboard',
		component: LeaderboardComponent
	},
	{
		path: '',
		component: LoginPageComponent
	},
	{
		path: 'menu',
		component: MenuComponent
	},
	{
		path: 'invaders',
		component:InvadersComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[InvadersComponent,LeaderboardComponent,LoginPageComponent,MenuComponent]
