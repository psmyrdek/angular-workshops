# 1.1 - List feature module

## Description

Angular apps are modular. To make reasoning about structure of your app easier, and to reduce global complexity, we want to introduce first feature module encapsulating "List view" with all of its features.

## Goal

1. Create "postings-list" feature module
2. Create `ListComponent` - container for the whole page
3. Create `EntryComponent` - component representing single entry on the list
4. Create `PostingsListService` with one method - `getAll()`, returning dummy data set of type `Posting[]`.

## Resources

- https://github.com/angular/angular-cli/wiki/generate
- https://angular.io/guide/module-types
