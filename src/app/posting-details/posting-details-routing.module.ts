import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { PostingDetailsComponent } from "./posting-details/posting-details.component";

const ROUTES: Route[] = [
    {
        path: 'details/:company/:posting',
        component: PostingDetailsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule]
})
export class PostingDetailsRoutingModule { }