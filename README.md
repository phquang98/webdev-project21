# Testing MySQL with TS

Practice example using TS + NodeJS + Express + MySQL

## How to run

- `npm run build`: build the whole project from TS -> JS
- `npm start`: runs the server with nodemon
- fake comment to fake merge conflicts

## Todo

- [x] create the server + custom helper fncs in configs
  - [x] finish the MySQL conn
  - [x] finnish the envi variables
- [x] implemnet CRUD ops
  - [] must have 9 CRUD actions based on RA Data Provider
  - [x] manual testing ok through Postman
- [ ] add prettier, eslint, githooks to project

## Notes

- the vscode settings tells vscode to auto pick up prettier to be the format
- tutorial use `body-parser`, you can use `express.json()`
- custom loggings:
  - NAMESPACE: 2nd [], where the error code lies in what folder
- use `mysql2` instead of `mysql` -> some key points:
  - destruct after `query()`, only cares row data
  - `query()` dont have callback args
- Postman POST HTTP remember Header Content-Type: application/json
- some problems with date format with Excel and xlxs
  - <https://github.com/SheetJS/sheetjs/issues/718>
  - <https://docs.sheetjs.com/> -> search `sheet_to_json`
  - in Excel, date is tested with English(Fin) locale, format yyyy-mm-dd (to extract `w` props)
  - without opts -> `{ t: 'n', v: 44276, w: '3/21/21' }`
    - type number, v is raw value from Excel, w is formatted text
  - `{cellDates: true;}` -> `{ t: 'd', v: 2021-03-22T21:59:56.000Z, w: '2021-03-23' }`
    - type date, v is raw value, w is formmated text
    - `{raw: false}` -> use `w` instead of `v`
- dwl `ra-data-simple-rest` to know how to write a Data Provider for RA, del later

## Fake SQL

- default date format is YYYY-MM-DD

```SQL
CREATE TABLE participant (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  participant_id VARCHAR(50),
  dob DATE NOT NULL,
  email VARCHAR(254) NOT NULL
);

INSERT INTO participant (first_name, last_name, participant_id, dob, email) VALUES
("John","Doe", "e123456","1972-06-13","johndoe@gmail.com"),
("Jane","Dean", "e123123","1956-01-07","janedean@gmail.com"),
("Joe","Dawn", "e123000","1998-02-13","joedawn@gmail.com");
```

## Resources

- [Tutorial 1](https://www.youtube.com/watch?v=vyz47fUXcxU&t=0s)
  - build up an API
  - create a custom logging fncs
- [Tutorial 2](https://www.youtube.com/watch?v=eTRSl1As83A&t=65s)
- xlsx
  - <https://www.youtube.com/watch?v=tKz_ryychBY>

## Draft

- what happend if query OK, but dont return anything
  - only handle logic based on query legit or not
  - -> can return msg says Your query ok, but no res found
- crud: when delete, validate query params first (e.g if id dont existed in db, msg back)
  - backend should only focus only performing query execution
- atm, mysql when delete entry, increment id not desirable outcome
  - IRL: 1,2,3 -> delete 3 -> 1,2,4,5
  - desired: 1,2,3 -> delete 3 -> 1,2,3,4
- should try to update to pooling instead of single connection
