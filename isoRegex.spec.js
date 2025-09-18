import { expect, test } from 'vitest'
import isoRegex from './isoRegex'

test('parse ISO strings', () => {
  const cases = [
    ["2025-09-18", { year: "2025", month: "09", day: "18", hour: undefined, minute: undefined, second: undefined, ms: undefined, tz: undefined }],
    ["2025-09-18T14:57:33", { year: "2025", month: "09", day: "18", hour: "14", minute: "57", second: "33", ms: undefined, tz: undefined }],
    ["2025-09-18T14:57:33.123", { year: "2025", month: "09", day: "18", hour: "14", minute: "57", second: "33", ms: "123", tz: undefined }],
    ["2025-09-18T14:57:33Z", { year: "2025", month: "09", day: "18", hour: "14", minute: "57", second: "33", ms: undefined, tz: "Z" }],
    ["2025-09-18T14:57:33+03:00", { year: "2025", month: "09", day: "18", hour: "14", minute: "57", second: "33", ms: undefined, tz: "+03:00" }],
    ["2025-09-18T14:57", null],
    ["2025-13-18", null],
    ["2025-02-30", { year: "2025", month: "02", day: "30", hour: undefined, minute: undefined, second: undefined, ms: undefined, tz: undefined }],
    ["not-a-date", null],
  ]

  cases.forEach(([str, expected]) => {
    const match = isoRegex.exec(str)
    if (expected === null) {
      expect(match).toBeNull()
    } else {
      expect(match).not.toBeNull()
      expect(match.groups).toEqual(expected)
    }
  })
})
