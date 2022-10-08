# Next.js API

This is a challange from my Neuefische Traineeship. The Exercieses I've solved are the described one's down below

In this challenge you will create an API with Next.js and handle various requests. First, find the api folder inside the pages directory of the project. Also, look inside the index.js in your pages folder and analyze the code.

You will use a service under `services/userService.js` and use the exported methods in your api functions.

## Exercise 1

Modify the code inside the file `api/users/index.js` to allow for GET requests

- Make use of the userService to retrieve all users
- Send a response to the client with a matching http status code and the users array as json

## Exercise 2

Modify the dynamic endpoint of your API inside the file `[userId].js` to allow for GET requests

- Create a function called handler and export it as default.
- Make sure that only `GET` requests are allowed for now!
- Use the `request.query` object to access the dynamic route parameter `id`.
- Make use of the userService to retrieve the user.
- If the user was found: Send a response to the client with a matching http status code and the user as json
- If the user was not found: Return an object with an error message inside.

## Exercise 3

Allow POST requests to be sent to: `api/users`.

- Access the received `newUser` data via `request.body`.
- Make use of the userService to create the new user.
- Send a response to the client with a matching http status code and the user as json.

## Exercise 4

Allow DELETE requests to be sent to: `api/users/[id]`.

- Make use of the userService to delete the user.
- Send a response to the client with a matching http status code.
