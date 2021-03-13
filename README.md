# Testing MySQL with TS

Practice example using TS + NodeJS + Express + MySQL

## How to run

- `npm run build`: build the whole project from TS -> JS
- `npm start`: runs the server with nodemon

## Project Structure

```markdown
│
├── dist // contains JS server files, compiled by tsc or ts-node, care static assets
├── node_modules
├── src // write TS server files in here
│ ├── controllers // handle what happened
│ ├── middlewares // store custom middleware aka helper fnc `(req,res,next)=> {...;next()};`
│ ├── models // only for MongoDB, store schema here, maps to a MongoDB collection
│ ├── public // static assets
│ ├── routes // divide app logic so that endpoint go with their respective controllers
└── app.ts
├── other config shit
```

## Notes

- the vscode settings tells vscode to auto pick up prettier to be the format
- tutorial use `body-parser`, you can use `express.json()`

## Resources

- [Tutorial 1](https://www.youtube.com/watch?v=vyz47fUXcxU&t=0s)
  - build up an API
  - create a custom logging fncs
