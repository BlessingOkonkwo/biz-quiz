# Quiz Application with Trivia API

This is a quiz application that allows users to test their knowledge by answering trivia questions from various categories and difficulty levels. The application utilizes the Trivia API to fetch questions and provides a user-friendly interface for the quiz.

## Live URL

The quiz application is deployed and accessible at the following URL:

[Live Quiz Application](https://biz-quiz.vercel.app/)


## Features

- Choose from a wide range of quiz categories.
- Select the desired difficulty level for the quiz.
- Set the number of questions to be included in the quiz (up to a maximum of 10 questions).
- Restart the quiz at any time.
- See final score at the end of the quiz.

## Getting Started

Follow these instructions to set up and run the quiz application on your local machine.

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your machine.
- Internet connection is required to fetch trivia questions from the API.

### Installation

1. Clone the repository or download the project files.

```bash
git clone <https://github.com/BlessingOkonkwo/biz-quiz>
```

2. Navigate to the project directory.

```bash
cd biz-quiz
```

3. Install the required dependencies.

```bash
npm install
```

### Running the Application

1. Start the development server.

```bash
npm start
```

2. Open your web browser and go to `http://localhost:3000` to access the quiz application.

### How to Use

1. On the homepage, you will see the quiz options:
   - Select a category from the available options.
   - Choose the desired difficulty level (easy, medium, or hard) from the dropdown.
   - Set the number of questions you want in the quiz (up to a maximum of 10).
   - Click the "Start Quiz" button to begin the quiz.

2. You will be presented with a series of trivia questions based on your selected options. Choose the correct answer from the provided choices.

3. After answering all the questions or whenever you want to restart the quiz, click the "Restart Quiz" button.

4. After answering the last question, view your final score by clicking on the "View Result" button.

### State Management

The application uses state management to handle the following data:

- Number of questions in the quiz.
- Selected quiz category.
- Selected difficulty level.
- Number of correct answers selected and final quiz score

### External Libraries and APIs

The project uses the following external libraries and APIs:

- Trivia API: This API is used to fetch trivia questions based on the user's selected options.

### Technologies Used

- React: JavaScript library for building user interfaces.
- Axios: JavaScript library for making HTTP requests to the Trivia API.
- Redux Toolkit: A predictable state container for managing state in JavaScript apps
- HTML Entities: Fastest HTML entities library for decoding and encoding text replacing entities to characters or HTML special characters
- React Modal: Accessible modal dialog component for React.JS for dsplaying the final score
- Tailwind: Styling of the application

### Contributing

If you wish to contribute to this project, feel free to create pull requests with your proposed changes. Please follow the standard coding conventions and ensure that your code is well-documented.

### License

This project is licensed under the [MIT License](LICENSE).

### Acknowledgments

- Thanks to the creators of the Trivia API for providing a great resource for trivia questions.

## Disclaimer

Please note that the trivia questions are provided by a third-party API, and I do not claim any ownership of the questions or their accuracy.