import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../libs/api'

interface IssuesProviderProps {
  children: ReactNode
}

export interface IssueProps {
  number: number
  title: string
  body: string
  comments?: number
  created_at: Date | number
}

interface FullIssueProps {
  number: number
  title: string
  body: string
  comments?: number
  created_at: Date | number
}

interface IssueContextType {
  issues: IssueProps[]
  fullIssue: FullIssueProps
  fetchIssues: (query?: string) => Promise<void>
  showOneIssue: (number: number) => Promise<void>
}

export const IssueContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<IssueProps[]>([])
  const [fullIssue, setFullIssue] = useState<FullIssueProps>(
    {} as FullIssueProps,
  )

  async function showIssues() {
    const response = await api.get('/repos/atilacsilva/Github-Blog/issues')
    setIssues(response.data)
  }

  async function fetchIssues(query?: string) {
    const username = 'atilaCSilva'
    const repo = 'Github-Blog'
    try {
      const { data } = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repo}`,
      )

      setIssues(data.items)
    } catch (error) {
      console.log(error)
    }
  }

  async function showOneIssue(number: number) {
    const response = await api.get(
      `/repos/atilacsilva/Github-Blog/issues/${number}`,
    )
    setFullIssue(response.data)
  }

  useEffect(() => {
    showIssues()
  }, [])

  return (
    <IssueContext.Provider
      value={{ issues, fetchIssues, showOneIssue, fullIssue }}
    >
      {children}
    </IssueContext.Provider>
  )
}
