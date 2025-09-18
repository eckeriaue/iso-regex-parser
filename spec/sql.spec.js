import { expect, test } from 'vitest'
import sqlRegex from '../src/sql'

test('SQL DATE formats', () => {
  const cases = [
    ["2025-09-18", { year: "2025", month: "09", day: "18", hour: undefined, minute: undefined, second: undefined, ms: undefined }],
    ["2025-09-18 14:57:33", { year: "2025", month: "09", day: "18", hour: "14", minute: "57", second: "33", ms: undefined }],
    ["2025-09-18 14:57:33.123", { year: "2025", month: "09", day: "18", hour: "14", minute: "57", second: "33", ms: "123" }],
    ["2025-09-18 14:57", null],
    ["2025-13-18", null],
    ["not-a-date", null],
  ]

  cases.forEach(([str, expected]) => {
    const match = sqlRegex.exec(str)
    if (expected === null) {
      expect(match).toBeNull()
    } else {
      expect(match).not.toBeNull()
      expect(match.groups).toEqual(expected)
    }
  })
})
