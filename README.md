Date Parsing Regular Expressions
Description
This project provides a set of regular expressions for parsing date strings in ISO 8601, UTC, and SQL formats. Each regex extracts date and time components (year, month, day, hour, minute, second, milliseconds, timezone) into an object like:
{
  year: "2025",
  month: "09",
  day: "18",
  hour: "14",
  minute: "57",
  second: "33",
  ms: undefined,
  tz: "+03:00"
}

The project uses Vite to build the regular expressions into a module.
Installation

Clone the repository:git clone <repository_URL>
cd date-regexp-parser


Install dependencies:npm install


Usage

The main file is src/index.js, exporting regexes from iso.js, utc.js, and sql.js. Import the desired regex:import { iso, utc, sql } from './dist/dateRegex.es.js';


Example usage for ISO 8601:const isoString = "2025-09-18T14:57:33+03:00";
const { groups } = iso.exec(isoString);

console.log(groups);
// Output: { year: "2025", month: "09", day: "18", hour: "14", minute: "57", second: "33", ms: undefined, tz: "+03:00" }


Similarly for UTC and SQL formats, using utc or sql instead of iso.

Building
To build the regexes into a module, run:
npm run build

The built files will be in the dist folder in ES and UMD formats (dateRegex.es.js and dateRegex.umd.js).
Project Structure

src/index.js — Entry point exporting the regexes.
src/iso.js — Regular expression for parsing ISO 8601 strings.
src/utc.js — Regular expression for parsing UTC strings.
src/sql.js — Regular expression for parsing SQL strings.
vite.config.js — Vite configuration for building.

Requirements

Node.js (version 16 or higher)
npm

License
MIT License
