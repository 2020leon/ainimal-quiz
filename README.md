# AInimal Quiz

Some quizzes for Ainimal, Spring 2021

## Backend

> ***Note***: Please change the directory to `backend` first.
>
> ```sh
> cd backend
> ```

### Backend Installation

```sh
npm install
```

### Backend Execution

Run the command below to build a server at <http://localhost:8000>

```sh
npm run test
```

### Backend Detail

You will see two input bars when visiting <http://localhost:8000>.
The only account is `ainimal@123`, whose password is `123123`.

- If the email and the corresponding password is correct,
  the page will alert `correct`.
- If either email or password is not given, the page will alert `empty`.
- If the password of the account is not correct, or the account is not exist,
  the page will alert `fail`.