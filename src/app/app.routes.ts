import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Tasks } from './tasks/tasks';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'tasks',component:Tasks}
];
