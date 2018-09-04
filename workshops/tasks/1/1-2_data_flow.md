# 1.2 - Data flow

## Description

Previously created elements cannot live without each other. It's time to compose them into something meaningful. This time we're going to use Angular's Dependency Injection to inject our dummy data into container component and pass the data downwards to create Postings List.

## Goal

1. Compose all three elements created earlier (two components and one service) to match the following structure:

```
   [ Service ]
        |
        |inject
+------ | ------+ List
|       V       |
|               |
| [ ListEntry ] |
| [ ListEntry ] |
| [ ListEntry ] |
| [ ListEntry ] |
| [ ListEntry ] |
+---------------+
```

2. Get the dummy data from service and make it available for children components.
3. Update `PostingsListComponent` template to render set of `PostingsListEntryComponent` created previously.
4. Make the entries deletable. Let the `PostingsListEntryComponent` emit proper event after clicking a 'Remove' button and let `PostingsListComponent` handle it.

## Resources

- https://angular.io/guide/template-syntax#input-and-output-properties
- https://angular.io/guide/template-syntax#ngforof

