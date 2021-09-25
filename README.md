# Currency conversion React App

In this project I created a web app that uses reactjs to **convert currencies**

As a demonstration of my skills, I built an app that utilizes components to fetch data from an internal server, displays that data,introduces **routing** concepts, \***\*authenticates** and **authorizes** users, and adds responsiveness to the website.

### Refer to image below:

<br/>
<div style="text-align: center;">
    <img src="https://res.cloudinary.com/strawhat/image/upload/v1632542107/currency%20codes/currency_nsj4mc.gif" alt="currency-converter-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Project Details

<details>
<summary>Click to view the Functionality that are added</summary>

#### Project Functionality

The app have the following functionalities

- Signup Route

  - To create an account, users will need to provide their email address and password.
  - There will be an error message if the password and confirmation password don't match.

- Login Route

  - Signing up is easy with a valid username and password. Users will be able to
    access their accounts once they've registered.
  - Navigation links are provided in the Navbar for users to access Home, Login, and Signup.
  - Users will be able to view the website responsively in mobile view, tablet view as well

- Home Route

  - The user will have the option of converting their chosen currencies.Initially, USD and INR are set as the currencies.
  - After clicking the logout link, users will be able to navigate to the login page
  - By clicking the currency codes button you are directed to an reactpopup component, where you can click on the currency codes or close the popup to close.

- Forget Password Route
  - In case a user forgets his password, he can update it by using the forget password feature

#### Project Details

- In order to focus my efforts on the functionality of this app rather than styling it, I used Bootstrap for quick styling for most of the components.
- I built a signup page to store user information in local storage, and then I built a login page to cross-check user input with the data in local storage, and if they do not exist, it will show the user an error.
- Upon successfully entering user details and pressing login, the user will be redirected to the home page.
- A flag is saved in local storage when a user enters the home page after clicking login so that I can communicate with the app. The flag is changed to false when the user clicks logout.Only authorized users will be able to access the home page. Everyone else will be redirected to the login page.
- I explored open-source currency database APIs and chose fastforex API.Every time there is a change in the user inputs, the fastforex API will be called and the results will be returned.

### Improvements to come

- The Google sign-in and sign-up functionality needs to be added.
- There will be the ability to store emails and passwords for multiple users.
- To the side of each currency code will be a flag of that country.
- Detailed currency names and codes will be available.
- A user interface and user experience needs to be improved to be attractive.

</details>
