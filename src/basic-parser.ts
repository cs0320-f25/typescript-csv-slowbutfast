import * as fs from "fs";
import * as readline from "readline";
import { z } from "zod";

/**
 * This is a JSDoc comment. Similar to JavaDoc, it documents a public-facing
 * function for others to use. Most modern editors will show the comment when 
 * mousing over this function name. Try it in run-parser.ts!
 * 
 * File I/O in TypeScript is "asynchronous", meaning that we can't just
 * read the file and return its contents. You'll learn more about this 
 * in class. For now, just leave the "async" and "await" where they are. 
 * You shouldn't need to alter them.
 * 
 * @param path The path to the file being loaded.
 * @param schema A zod schema describing each row in the CSV
 * @returns a "promise" to produce an array of 
 * @throws error if CSV cannot be parsed
 */
export async function parseCSV<T>(path: string, schema?: z.ZodType<T>): Promise<T[] | string[][]> {
  // This initial block of code reads from a file in Node.js. The "rl"
  // value can be iterated over in a "for" loop. 
  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // handle different line endings
  });
  
  let CSVLines = [];
  
  // We add the "await" here because file I/O is asynchronous. 
  // We need to force TypeScript to _wait_ for a row before moving on. 
  // More on this in class soon!
  for await (const line of rl) {
    const values = line.split(",").map((v) => v.trim());
    CSVLines.push(values)
  };
  
  // if the CSV is empty, return nothing
  if (CSVLines.length === 0) {
    return []
  };

  if (schema) { 
     // Create an empty array to hold the results
    let result: T[] = [];
    for (const row of CSVLines) {
      // try to process the row. throw error if it doesn't work
      try {
        const parsedRow = schema.parse(row);
        result.push(parsedRow);
      } catch (error) {
        console.error("CSV could not be parsed.");
      }
    }
    return result;
  } else {
    return CSVLines;
  }
}