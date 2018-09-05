# 2.2 - Routing configuration

## Description

Navigating from list to posting details is not available. To make our app easy to use let's implement simple routing between list and individual entries. Don't forget about fetching real entries from Postings API instead of using dummy data.

## Goal

1. Create routing configurations for `posting-list` and `posting-details` modules. Import `RouterModule` and configure it in a way that opening both `PostingsListComponent` and `PostingDetailsComponent` is possible.
2. Use `RouterOutlet` directive to display routes content in main template of your application.
3. Create links to posting details in each posting list entry.
4. Support going back to list from posting details.
4. In `posting-details` module fetch data about given posting and display it.
5. Make sure that it's still possible to open root url of your app `http://localhost:4200/`.

## Resources

- https://angular.io/guide/router
- https://angular.io/api/router/RouterOutlet
- https://angular.io/api/router/RouterLink
- https://angular.io/api/router/ActivatedRoute
- https://angular.io/guide/http
