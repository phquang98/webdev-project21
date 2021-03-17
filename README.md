# Testing MySQL with TS

Practice example using TS + NodeJS + Express + MySQL

## How to run

- `npm run build`: build the whole project from TS -> JS
- `npm start`: runs the server with nodemon
- fake comment to fake merge conflicts

## Notes

- the vscode settings tells vscode to auto pick up prettier to be the format
- tutorial use `body-parser`, you can use `express.json()`
- custom loggings:
  - NAMESPACE: 2nd [], where the error code lies in what folder
- use `mysql2` instead of `mysql` -> some key points:
  - destruct after `query()`, only cares row data
  - `query()` dont have callback args

## Resources

- [Tutorial 1](https://www.youtube.com/watch?v=vyz47fUXcxU&t=0s)
  - build up an API
  - create a custom logging fncs
- [Tutorial 2](https://www.youtube.com/watch?v=eTRSl1As83A&t=65s)
