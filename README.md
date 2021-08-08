# youtube-client
RSS School. Angular 2021 Q3. Application "YouTube-Client"

## Branch "task-intro" ([link to PR#1](https://github.com/Musmen/youtube-client/pull/1)): 
### Task "Intro" ([link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/intro.md))

#### Scope:
- Generate a new Angular project using ng-cli
- Migrate Angular application to ESLint with rules [AirBnB](https://github.com/airbnb/javascript)
- Think about how to break down the whole app into smaller pieces.
- Generate all the necessary components using ng-cli. The search result list and each item should be represented as separate components
- Based on the mocked response which is stored in .json file, create necessary interfaces
[YouTube client. Response example](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/response.json)

Please bear in mind that you don’t need to implement any logic or markup. The outcome of this task should contain only newly generated and empty components.

## Branch "task-2" ([link to PR#2](https://github.com/Musmen/youtube-client/pull/2)): 
### Task "Angular. Components. Directives & Pipes task" ([link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/components-directives-pipes.md))

#### Scope:
- Once a user is entered the app, The only **Header** component should be shown.
For now, you can enter whatever value which won't influence your search result.
Please note that the **Sorting criteria block** should be hidden
- By submitting the search form, the **Search results block** appears.
- Using the [response example](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/response.json), render cards with predefined data
    You can store the mocked data in the **Search results** component
    - The bottom border represents the publication date status. Create a directive to achieve the result
        - If a publication date is less than a month, set border background to green
        - If a publication date is less than 7 days, set border background to blue
        - If a publication date is more than 6 months, set border background to red
- By clicking on the **Settings button**, the **Filtering criteria block** should be toggled
    - It should be possible to sort search results by date or count of views
    - Sorting should work both in the direction of decreasing values and in the direction of increasing values
    - Using a pipe, filter search results by value that a user types in the input