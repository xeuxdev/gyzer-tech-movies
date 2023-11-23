export function formatMinutesToHours(minutes, locale = "en-US") {
  if (typeof minutes !== "number" || isNaN(minutes) || minutes < 0) {
    return "Invalid input"
  }

  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  const formattedHours = new Intl.NumberFormat(locale, {
    style: "unit",
    unit: "hour",
  }).format(hours)
  const formattedMinutes = new Intl.NumberFormat(locale, {
    style: "unit",
    unit: "minute",
  }).format(remainingMinutes)

  return `${formattedHours} ${formattedMinutes}`
}

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  currencyDisplay: "symbol",
  maximumFractionDigits: 2,
})

export const API_URL = import.meta.env.PROD ? "" : "http://localhost:3000"
