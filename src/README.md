# Calculator App

This is a simple React application for calculating the number of days lived and exact age based on a user's birthdate. The project uses Vite for development.

## Installation

1. **Clone the repository:**

   ```
   git clone git@github.com:Old-Dead-One/age-in-days-ts.git
   cd calculator-app
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the development server:**

   ```
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Code Overview

### `Calculator` Component

This component handles the input, calculation, and display logic for the app.

#### State Variables

- `name`: Stores the user's name.
- `birthDateInput`: Stores the birthdate input as a string.
- `daysLived`: Stores the calculated number of days lived.
- `exactAge`: Stores the exact age as an object with `years`, `months`, and `days`.

#### Methods

- `handleBirthdateChange(e)`: Updates the birthdate input state when the user changes the date.
- `calcExactAge(birthDateInput)`: Calculates the exact age based on the birthdate input.
- `calcDaysLived(birthDateInput)`: Calculates the total number of days lived based on the birthdate input.
- `handleSubmit(e)`: Handles the form submission, triggering the calculations for exact age and days lived.

## Usage

1. Open the application in your browser.
2. Enter your name in the "Name" field.
3. Select your birthdate using the date picker.
4. Click the "Calculate" button.
5. The application will display the number of days you have lived and your exact age in years, months, and days.
