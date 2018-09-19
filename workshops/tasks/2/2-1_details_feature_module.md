# 2.1 - Details feature module

## Description

List itself is not so interesting. Sometimes we want to learn more about details of given posting and for that we need to implement additional feature in our application. To follow the same pattern as before, we're going to create new feature module for the whole functionality.

## Goal

1. Create "postings-details" feature module
2. Create `DetailsComponent` - container for the whole page
3. Create `PostingsDetailsService` with one method - `get()`. Create dummy instance of `Posting` type and return it from this method.
4. Use your newly created service to present `Posting` details in `DetailsComponent` template.

(For debug purposes replace `app-list` with `app-details` in `app.component.html` to check if everything works fine)

## Resources

- https://github.com/angular/angular-cli/wiki/generate
- https://angular.io/guide/module-types
