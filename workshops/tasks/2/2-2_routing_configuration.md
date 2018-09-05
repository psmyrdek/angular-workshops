# 2.2 - Routing configuration

## Description

Navigating from list to posting details is not available. To make our app easy to use let's implement simple routing between list and individual entries. Don't forget about fetching real entries from Postings API instead of using dummy data.

## Goal

1. Create additional module for root routing configuration called `app-routing.module.ts`. Import `RouterModule` and configure it in a way that opening both `PostingsListComponent` and `PostingDetailsComponent` is possible.
2. Use `RouterOutlet` directive to display routes content in main template of your application.
3. Use `RouterLink` directive inside of `PostingsListEntryComponent` template to support links to posting details.
4. In `posting-details` module fetch data about given posting and display it.

## Resources

- https://angular.io/guide/router
- https://angular.io/api/router/RouterOutlet
- https://angular.io/api/router/RouterLink
- https://angular.io/api/router/ActivatedRoute
- https://angular.io/guide/http
