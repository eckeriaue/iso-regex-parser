import { expect, test } from 'vitest'
import utcRegex from '../src/utc'

test('UTC string formats', () => {
  const cases = [
    ["Wed, 18 Sep 2025 14:57:33 GMT", {
      weekday: "Wed", day: "18", month: "Sep", year: "2025", hour: "14", minute: "57", second: "33"
    }],
    ["Mon, 01 Jan 2024 00:00:00 GMT", {
      weekday: "Mon", day: "01", month: "Jan", year: "2024", hour: "00", minute: "00", second: "00"
    }],
    ["Invalid date", null],
    ["Wed, 32 Sep 2025 14:57:33 GMT", null],
    ["Wed, 18 Sep 2025 24:00:00 GMT", null],
  ]

  cases.forEach(([str, expected]) => {
    const match = utcRegex.exec(str)
    if (expected === null) {
      expect(match).toBeNull()
    } else {
      expect(match).not.toBeNull()
      expect(match.groups).toEqual(expected)
    }
  })
})
