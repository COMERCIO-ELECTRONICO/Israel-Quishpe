
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./inicio/home/home.component";
import { NgModule } from "@angular/core";

const rutas: Routes = [
    {
        path: 'inicio',
        component: HomeComponent
    },
    {

    }
];

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    providers: [],
    declarations: [],
    exports: [RouterModule]
})

export class AppRoutesComponent {

}