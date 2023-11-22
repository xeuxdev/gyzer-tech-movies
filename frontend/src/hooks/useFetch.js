import { useCallback, useEffect, useState } from "react"

export function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState()

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [url, fetchData])

  return {
    data,
    error,
    isLoading,
  }
}
