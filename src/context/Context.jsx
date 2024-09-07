import { createContext, useState } from "react"
import run from "../config/gemini"

export const Context = createContext()

const ContextProvider = (props) => {
  const [input, setInput] = useState("")
  const [recentPrompt, setRecentPrompt] = useState("")
  const [prevPrompt, setPrevPrompt] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultData, setResultData] = useState("")

  const onSent = async (prompt) => {
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)

    const response = await run(prompt)

    setResultData(response)
    setLoading(false)
    setInput("")
  }

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  }

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}

export default ContextProvider
