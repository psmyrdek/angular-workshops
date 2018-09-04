# 1.4 - Http

## Description

Dummy data is fine only in prototyping phase. Let's turn our prototype into real-life application by using SmartRecruiters public Postings API to fetch postings data and fill the list.

## Goal

1. Update `getAll()` method of `PostingsListService` to support fetching from remote data sources. Fetch public postings of your preferred company by using `HttpClient` service.
2. Map fetched postings into - `Observable<Posting[]>` - if some properties are missing, it's fine to stick to fake values (i.e. postingType).
3. Fill the list with fetched data.

4. (optional) Create a simple reactive form with only one input field - company name. Your application should react to company name changes and fetch proper postings.
5. (optional) Try not to kill our back-end - don't fetch new values until company name changes or there's not enough time gap between two separate changes.

## Resources

- https://angular.io/guide/http
- https://angular.io/guide/observables-in-angular#http
- https://api.smartrecruiters.com/v1/companies/SmartRecruiters/postings