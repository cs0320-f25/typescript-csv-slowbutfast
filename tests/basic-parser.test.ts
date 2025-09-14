import { parseCSV } from "../src/basic-parser";
import * as path from "path";
import { z } from "zod";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
// these paths don't exist yet
const CITIES_CSV_PATH = path.join(__dirname, "../data/cities.csv");
const EMPTY_CSV_PATH = path.join(__dirname, "../data/empty.csv");
const ONE_FIELD_CSV_PATH = path.join(__dirname, "../data/one-field.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

export const PersonSchema = z.object({
  name: z.string(),
  age: z.number()
});

export const OneFieldSchema = z.object({
  field: z.string()
});

export const CitySchema = z.object({
  name: z.string(),
  population: z.number().int(),
  GDP: z.number
});

/*
basic test template:

test("describe test", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  // test data here
});
*/

/* my tests begin here */

// TODO: actually write these tests lol

test("make sure data is split into string[][]", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH);
  expect(Array.isArray(results)).toBe(true);

  /*
  TODO: check content of array to make sure it works 
  */
});

test("handles empty CSV files with no schema provided", async () => {
  const results = await parseCSV(EMPTY_CSV_PATH);
  expect(Array.isArray(results)).toBe(true);
  expect(results.length).toBe(0);
});

test("tests undefined schema parameter", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, undefined);
  expect(Array.isArray(results)).toBe(true);
  // this test should only pass on result with type string[][]
  expect(results[0]).toEqual(["name", "age"]);
});

test("parse with 1 field schema", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  // unsure of how to write this test
});

test("parse with 2 field schema", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  // unsure of how to write this test
});