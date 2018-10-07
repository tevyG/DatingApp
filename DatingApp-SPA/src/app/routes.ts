import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},

    //Protect multi Routings in once
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent},
            { path: 'messages', component: MessagesComponent},
            { path: 'lists', component: ListsComponent},
        ]
    },

    //Protect single Routing
    //{ path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
    //{ path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
    //{ path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},

    { path: '**', redirectTo: '', pathMatch: 'full'},
];
