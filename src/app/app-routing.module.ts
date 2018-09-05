import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/list',
                pathMatch: 'full'
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }