import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { PostingsListComponent } from "./postings-list/postings-list.component";

const ROUTES: Route[] = [
    {
        path: 'list',
        component: PostingsListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule]
})
export class PostingListRoutingModule { }