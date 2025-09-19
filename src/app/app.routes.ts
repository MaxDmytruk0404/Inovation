import { Routes } from '@angular/router';
import { Advertising } from './page/advertising/advertising';
import { Map } from './page/map/map';

export const routes: Routes = [
    {
        path: '',
        component: Map
    },
    {
        path: 'Advertising',
        component: Advertising
    }
];
