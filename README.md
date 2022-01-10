![CI/CD](https://github.com/Hadeneekeh/contact-list-frontend/workflows/CI/CD/badge.svg) [![codecov](https://codecov.io/gh/Hadeneekeh/contact-list-frontend/branch/develop/graph/badge.svg?token=TWRKCCH46P)](https://codecov.io/gh/Hadeneekeh/contact-list-frontend)

## Technologies used

- [React](https://reactjs.org)
- [React JSS](https://cssinjs.org/react-jss/?v=v10.9.0/): For Css-in-js styling.
- [Axios](https://github.com/axios/axios): For making HTTP requests.
- [React Query](https://react-query.tanstack.com): For api integration and server-side state management.
- [React Router DOM](https://reactrouter.com/docs/en/v6): For the app routing.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): For the app testing.
- [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages): For deployment.

## Project Setup

The folder structure of the src directory <br/>

```sh
  ├── components
  ├── pages
  ├── reusables
  ├── services
  └── utils
```

- `components` : This folder contains the page components.
- `pages` : This folder contains the page component.
- `reusables`: This has all the reusable components in the app.
- `services`: This contains the api logics.
- `utils` : This folder contains helper function.

### API Integration Architecture​

The app uses React Query library to handle api integration, [see here](https://react-query.tanstack.com/quick-start).

### Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
