import { Routes } from '@angular/router';
import { BaseComponent } from './features/base/base.component';
import { TemperatureComponent } from './features/temperature/temperature.component';
import { DistanceComponent } from './features/distance/distance.component';
import { SpeedsComponent } from './features/speeds/speeds.component';

export const routes: Routes = [
    { path: 'base', component: BaseComponent },
    { path: 'temperature', component: TemperatureComponent },
    { path: 'distance', component: DistanceComponent },
    { path: 'speeds', component: SpeedsComponent },
];
