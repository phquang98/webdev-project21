import xlsx, { ParsingOptions, Sheet2JSONOpts } from "xlsx";
import logging from "../config/logging";

import { Participant } from "../models/participant";

const excelParseOpts: ParsingOptions = {
  cellDates: true, // ExcelDateFormat (5 nums) -> JSDateFormat
};

const sheet2JsonOpts: Sheet2JSONOpts = {
  raw: false, // use formatted str, aka w prop
};

/** Extract data from .xlsx files.
 *
 *  Props will be auto assigned based on cell row value + col name.
 */
const extractDataFromXlsx = (filePath: string, sheetName: string): Participant[] => {
  const workBook = xlsx.readFile(filePath, excelParseOpts);
  const workSheet = workBook.Sheets[sheetName];
  const dataDump: Participant[] = xlsx.utils.sheet_to_json(workSheet, sheet2JsonOpts);
  // console.log(dataDump);
  // console.log(xlsxQueryConstructor(dataDump));
  return dataDump; //
};

/** Returns a query that can be used for multiple insertion to be the database.
 *
 *  Add it after the SQL `VALUES` keyword
 */
const xlsxQueryConstructor = (data: Participant[]): Promise<string> => {
  let queryValues: string = "";
  // logging.info("UPLOAD", "From Excel:", data);
  data.map((ele, index) => {
    if (index === 0) {
      queryValues += `( "${ele.first_name}", "${ele.last_name}", "${ele.participant_id}", "${ele.dob}", "${ele.email}")`;
    } else {
      queryValues += `, ( "${ele.first_name}", "${ele.last_name}", "${ele.participant_id}", "${ele.dob}", "${ele.email}")`;
    }
  });
  queryValues += ";";

  return new Promise((resolve, reject) => {
    if (queryValues !== "") {
      resolve(queryValues);
    } else {
      logging.error("UPLOAD", "Query VALUES constructed wrong!");
      reject();
    }
  });
};

export { extractDataFromXlsx, xlsxQueryConstructor };
//
