# Trade Data Web Application

This web application allows users to access and analyze Kenya's trade data retrieved from the UN Comtrade API. Users can register for an account, log in, search for specific trade information, apply filters, and export the data in various formats.

>> https://alpha-data-solutions-frontend.vercel.app/

## Features
  1. User Registration: Users can create an account by providing their username, email, and password.
  2. User Login: Registered users can log in using their username and password.
  3. Dashboard: Upon login, users are redirected to the dashboard, where they can access the application's features and functionalities.
  4. Search Trade Data: Users can search for specific trade data by entering keywords or filters. The system fetches the relevant data from the UN Comtrade API.
  5. Export Data: Users have the option to export the trade data in formats such as CSV, JSON, or Excel for further analysis or integration with other systems.

## Prerequisites
1. Node.js: Ensure that you have Node.js installed on your system. You can download it from https://nodejs.org.
Getting Started

Clone the repository:
```bash
git clone https://github.com/ealpha072/alpha_data_solutions.git
```

Navigate to the project directory:
```bash
cd trade-data-analysis-web-app
```

Install the dependencies:
```bash
npm install
```
Set up environment variables:
Create a .env file in the root directory.
Define the required environment variables such as database connection details, API keys, etc.
Start the development server:

```bash
npm start
```
Open your web browser and access the application at http://localhost:3000.

Technology Stack
1. `React`: JavaScript library for building the user interface.
2. `Node.js`: JavaScript runtime for the server-side application.
3. `Express`: Web framework for building the API endpoints.
4. `UN Comtrade API`: External API for retrieving trade data.
5. `MongoDB`: NoSQL database for storing user information.

Folder Structure

```bash
Copy code
├── client              # React client-side application
├── server              # Express server-side application
└── README.md           # Project README file
```
## Contributing
Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request. When contributing, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with descriptive commit messages.
4. Push your changes to your fork.
5. Submit a pull request detailing your changes.

## License
This project is licensed under the MIT License.

Contact
If you have any questions or inquiries, please contact me at [ealpha072@gmail.com].
