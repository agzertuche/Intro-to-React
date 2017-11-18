# Intro to React
This course will help you understand React JS and how to develop an App using this awesome library, during the course you will be learning the following React concepts:
- One-way data flow
- Virtual DOM
- JSX
- Components
- Render method
- Props
- State
- Event handlers
- Conditional rendering
- Forms
- PropTypes
- Lifecycle methods
- Stateless and Stateful components
- Nested components
- High order components (HOC)
- Implementing third party controls
- Redux

# Repository Structure
This repository includes the following information:
- [App mockups](./mockups)
- [Session 1 presentation](http://photo-album.arturodelagarza.com/Intro-To-React-Presentation1.pdf)

And project folders for each development stage of the App:
1. [Boilderplate project](./01.photo-album-boilerplate): Starter project
2. [React only project](./02.photo-album-reactonly): Project using React and React-Router without Redux
3. [React-Redux project](./03.photo-album-withredux): Project using React-Redux to manage better the data flow of the App
4. [Final version project](./04.photo-album-finalversion): Final version of the project, Unit testing, Authentication and Data stored on Firebase. (In progress...)

# Getting Started
Fork or clone this repo, then run below commands:
````
cd 01.photo-album-boilerplate
npm install
npm start
````

# Photo Album App
This app was built using:
- [create-react-app](https://github.com/facebookincubator/create-react-app): To start working with React with no build configuration
- [semantic-ui-react](https://github.com/jhudson8/react-semantic-ui): To improve the UI of the app using semantic components and styles
- [react-images](https://github.com/jossmac/react-images): To add lightbox functionality for displaying images
- [react-router](https://github.com/ReactTraining/react-router): To manage the routing of the app
- [react-redux](https://github.com/reactjs/react-redux): To manage the data flow of the app

## [Demo](http://photo-album.arturodelagarza.com)
![Alt Text](./photo-album-demo.gif)

# References
- [React Docs](https://reactjs.org/docs/hello-world.html)