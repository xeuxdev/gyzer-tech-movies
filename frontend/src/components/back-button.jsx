import React from "react"
import { useNavigate } from "react-router-dom"

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="relative px-4 py-1 text-white bg-gray-600 rounded-md cursor-pointer hover:bg-gray-400"
    >
      Back
    </button>
  )
}
