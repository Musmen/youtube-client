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

## Branch "task-3" ([link to PR#3](https://github.com/Musmen/youtube-client/pull/3)): 
### Task "Angular. Modules & Services. Routing task" ([link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/modules-services-routing.md))

#### Scope:
The objective of the task is to implement new pages using modules, services and routing features. So, your app will contain the following pages:
- Login page
- 404 page
- Main page (which is implemented before)
- Detailed information page

**[YouTube client. Login page JPG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/login.jpg)**

**[YouTube client. 404 page JPG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/404.jpg)**

**[YouTube client. Main page JPG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/main.jpg)**

**[YouTube client. Detailed information page JPG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/details-page.jpg)**

#### Task requirements
To continue with the YouTube app, some structural refactoring is required.
First, your project should be reorganized into the following modules:
- **CoreModule** (global layout components: Header, Footer, global services). Should be imported **ONCE** in **AppModule**
- **YoutubeModule** (YouTube feature module. Includes the main page implemented before, the **Detailed information page**, models, services, etc.)
- **AuthModule** (login page, login service, etc.)
- (optionally) **SharedModule** for shared components, directives, and pipes. Should **NOT** include services. It could be imported into each feature module.

Please bear in mind that the *app.component* shouldn’t contain any logic at this stage.

#### Project structure and technical requirements
The project structure can be organized in the following way:

```
    app
    ├── core                
    │   ├── components
    │   ├── pages
    │   ├── services
    │   ├── guards
    ├── shared
    │   ├── components
    │   ├── directives
    │   ├── models
    │   ├── pipes
    ├── youtube
    │   ├── components
    │   ├── directives
    │   ├── models
    │   ├── pages
    │   ├── pipes
    │   ├── services
    ├── auth
    │   ├── components
    │   ├── models
    │   ├── pages
    │   ├── services
    ├── app.component.html
    ├── app.component.scss
    ├── app.component.ts
    ├── app.component.spec.ts
    ├── app.module.ts
```

All the feature modules (**YouTubeModule**, **AuthModule**) must be lazy-loaded which means that they are going to be imported by using routing features rather than the direct import into a module.
 
Pages directory contains components that represent individual pages (**Login page**, **Main page**, **Detailed information page**, etc) and used in the router configuration.

#### Functional requirements
- **404 page**
    - If the user entered an incorrect URL which is missing in the router configuration, the app should redirect him to the 404 page
- **Login page**
    - When the user isn't logged in, the app should prevent him/her from navigating to any pages other than the login page. A router guard would be helpful to implement such behavior.
    - There’s no user validation at this stage. You can enter arbitrary credentials and invoke login using an appropriate service.
    - Create a login service to enable the required login functionality.
    - Once the user has submitted the form, an appropriate method should be called in the login service that saves a fake auth token in *localStorage*. Then, the user should be redirected to the **Main page**. If the user gets logged out, he/she should be redirected to the initial login page and the auth token should be deleted from *localStorage*.
    - The login button in the Header component could remain inactive for now, because implementing its functionality requires some RxJS-based features (we’ll deal with it in the upcoming lesson and corresponding task). In order to implement the logout functionality, you can create a separate button that calls the logout method of the login service.
- **Main page**
    - Move the state and its methods from the Board component to a dedicated service.
    - By clicking the *More* button, the **Detailed information** page should appear
- **Detailed information page**
    - Should contain information about the selected video.
    - To determine which video is selected, pass its id as a route param

## Branch "task-4" ([link to PR#4](https://github.com/Musmen/youtube-client/pull/4)): 
### Task "Angular. RxJS & Observables. HTTP task" ([link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/rxjs-observables-http.md))

#### Scope:
- **Global search functionality**
    - remove the *Search* button. Now we're going to invoke the search logic once the user types something
    - in order not to spam our API, create a new Observable in your component and emit changes until the user enters at least 3 characters
    - add debounce functionality to prevent API calls from being performed if the user is still typing.
- **Login block**
    - create a new Observable in the **Login service** that will emit a boolean which indicates whether the user is logged in or not.
    - show the "Login" and "Logout" button if the user is logged out / logged in
- **HTTP requests and YouTube API**
    - remove the mocked response from your project and use a service that is created in the **YouTube module**.
    - use the HTTP interceptor to shorten request URLs in your services and pass your access token.