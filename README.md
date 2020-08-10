This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### 1. Install json-server

### `mkdir json-mock-api`

### `cd json-mock-api`

### Create db.json file with the following information
{
    "cryptocurrencies": [
        { "id": 0, "code": "BTC", "name": "Bitcoin" },
        { "id": 1, "code": "TNCC", "name": "TNC Coin" },
        { "id": 2, "code": "ETH", "name": "Ethereum" },
        { "id": 3, "code": "XRP", "name": "XRP" }
    ],
    "prices": [
        { "code": "BTC", "currency": "USD", "price": "$ 10.000.32" },
        { "code": "BTC", "currency": "COP", "price": "COP 10.000" },
        { "code": "BTC", "currency": "MXN", "price": "MXN 10.000.01" },
        { "code": "BTC", "currency": "EUR", "price": "€ 11.000.04" },
        { "code": "TNCC", "currency": "USD", "price": "$ 20.000.32" },
        { "code": "TNCC", "currency": "COP", "price": "COP 20.000" },
        { "code": "TNCC", "currency": "MXN", "price": "MXN 20.000.01" },
        { "code": "TNCC", "currency": "EUR", "price": "€ 21.000.04" },
        { "code": "ETH", "currency": "USD", "price": "$ 30.000.32" },
        { "code": "ETH", "currency": "COP", "price": "COP 30.000" },
        { "code": "ETH", "currency": "MXN", "price": "MXN 30.000.01" },
        { "code": "ETH", "currency": "EUR", "price": "€ 31.000.04" },
        { "code": "XRP", "currency": "USD", "price": "$ 40.000.32" },
        { "code": "XRP", "currency": "COP", "price": "COP 40.000" },
        { "code": "XRP", "currency": "MXN", "price": "MXN 40.000.01" },
        { "code": "XRP", "currency": "EUR", "price": "€ 41.000.04" }
    ]
}

### `npx json-server db.json --port 3004`

Start the server to mock API

### 2. In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
