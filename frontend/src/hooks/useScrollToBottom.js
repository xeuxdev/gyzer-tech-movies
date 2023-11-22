import { useEffect, useState } from "react"

const useScrollToBottom = () => {
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const body = document.body
      const html = document.documentElement
      const documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )

      const buffer = 10

      setAtBottom(scrollTop + windowHeight >= documentHeight - buffer)
    }

    // Add event listener for the 'scroll' event
    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []) // Empty dependency array ensures that the effect runs only once on mount

  return { atBottom }
}

export default useScrollToBottom
