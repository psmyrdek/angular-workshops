# 1.3 - Third party libraries

## Description

Not all the features have to be developed internally - sometimes we want to outsource parts of our efforts to someone else. This time we want to import filtering functionality and apply available components to our list.

## Goal

1. Install `<packagename>` package via npm
2. Import `PostingsListFilteringModule` from newly installed package to your application
3. Use `<app-postings-list-filters></app-postings-list-filters>` component to handle filtering. 

    `PostingsListFiltersComponent` emits following events:
    - `filterPublic` - display public postings
    - `filterReallyOld` - display postings published more than 20 days ago
    - `filterFilledJobDescription` - display postings with job description

Take some time to handle those events and to see the actual filtering in action.

## Resources

- https://angular.io/guide/bootstrapping
- https://angular.io/guide/ngmodules
- https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview
- https://github.com/dherges/ng-packagr
