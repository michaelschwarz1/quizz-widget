# QuizzWidget

This project was generated for [Junction Hack 2020](https://www.hackjunction.com). The main purpose is to bring more interaction into virtual event booths. This game can be embedded via iframe into the brella.io website or any other website. The Content of the Quiz is configurable by every booth partner. Users gain points which they can use to level up in their user profile. Currently the connection to a user profile is not implemented. The service collectiong the quizz data is currenlty only mocked. It's planned as a serverless application in azure functions written in .net core or python.
## Live Demo

You can checkout a live demo here:

[![app](/assets/app.jpg)](https://ambitious-rock-06c152103.azurestaticapps.net)

## Embedd
You can easily embed this widget as an iframe into any website.

`<iframe src="https://ambitious-rock-06c152103.azurestaticapps.net" width="658px" height="400px;" scrolling="no" ></iframe>`
## Local Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Tech Stack
- Angular 10
- Bootstrap 
- Azure Static Web App
## Continius Bild /  Contiuous integration

This project gets automatically build and deployed (CI/CD) to MS Azure as a Static Web App located at: https://ambitious-rock-06c152103.azurestaticapps.net .
You can get more information about Azure Static Web Apps [here](https://docs.microsoft.com/de-de/learn/modules/publish-app-service-static-web-app-api/)
