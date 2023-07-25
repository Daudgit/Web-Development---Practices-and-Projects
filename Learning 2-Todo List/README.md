<img src="https://github.com/Daudgit/Web-Development---Practices-and-Projects/blob/main/Learning%202-Todo%20List/Screenshot%202023-07-25%20220551.png">
📝 **React To-Do List App**

This is a simple To-Do List app built using React. You can add, edit, and delete tasks in the list.

## Getting Started

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies using the following command:

```
npm install
```

### Running the App

Run the app using the following command:

```
npm start
```

The app will start running at `http://localhost:3000` in your browser.

## Features

- Add a new task to the list.
- Edit existing tasks.
- Delete tasks from the list.

## How to Use

1. Enter a task in the input box labeled "Enter the New Task...."
2. Click the "Add" button to add the task to the list.
3. To edit a task, click the "Edit" button next to the task, make the desired changes in the input box, and click "Save."
4. To delete a task, click the "Delete" button next to the task.

## Code Explanation

This project consists of two main components:

### TodoItem Component

The `TodoItem` component represents a single task in the To-Do list. It uses state variables `isEditing` and `text` to handle editing of tasks. When the "Edit" button is clicked, the component switches to edit mode, and the input box becomes editable. When the "Save" button is clicked, the component updates the task with the new text and switches back to view mode.

### App Component

The `App` component is the main component that manages the state of the To-Do list. It uses the `useState` hook to maintain the `todos` array, which stores all the tasks. The `newTodo` state is used to store the text of the new task being added. The app provides three functions to handle adding, editing, and deleting tasks:

- `handleAddTodo`: Adds a new task to the `todos` array.
- `handleEditTodo`: Updates the text of an existing task in the `todos` array.
- `handleDeleteTodo`: Deletes a task from the `todos` array.

The app renders the list of tasks using the `TodoItem` component and passes the necessary props for handling editing and deleting tasks.

## Styling

The styling for the app is done using CSS in the `App.css` file. It includes styles for the background gradient, layout, and appearance of the To-Do list items.

Feel free to explore the code and modify it according to your requirements. Happy coding! 😄


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


