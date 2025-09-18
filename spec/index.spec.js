import { expect, test } from 'vitest'

test('UTC string', () => {
  const str = 'Wed, 18 Sep 2025 14:57:33 GMT'
  const match = utcRegex.exec(str)
  expect(match.groups).toEqual({
    weekday: 'Wed',
    day: '18',
    month: 'Sep',
    year: '2025',
    hour: '14',
    minute: '57',
    second: '33'
  })
})

test('SQL DATE', () => {
  const str = '2025-09-18'
  const match = sqlDateRegex.exec(str)
  expect(match.groups).toEqual({ year: '2025', month: '09', day: '18' })
})

test('SQL DATETIME', () => {
  const str = '2025-09-18 14:57:33'
  const match = sqlDateTimeRegex.exec(str)
  expect(match.groups).toEqual({
    year: '2025', month: '09', day: '18',
    hour: '14', minute: '57', second: '33'
  })
})

test('SQL TIMESTAMP', () => {
  const str = '2025-09-18 14:57:33.123'
  const match = sqlTimestampRegex.exec(str)
  expect(match.groups).toEqual({
    year: '2025', month: '09', day: '18',
    hour: '14', minute: '57', second: '33',
    ms: '123'
  })
})
