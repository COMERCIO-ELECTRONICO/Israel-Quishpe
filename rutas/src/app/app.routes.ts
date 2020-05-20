import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';
import { NgModule } from "@angular/core";

const rutas: Routes = [
    {
        path: 'inicio',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    providers: [],
    declarations: [],
    exports: [RouterModule]
})

export class AppRoutesComponent {

}