import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../libs/api'

interface IssuesProviderProps {
  children: ReactNode
}

interface IssueProps {
  number: number
  title: string
  body: string
  comments?: number
  created_at: string
}

interface IssueContextType {
  issues: IssueProps[]
  fetchIssues: (query?: string) => Promise<void>
}

export const IssueContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<IssueProps[]>([])

  async function showIssues() {
    const response = await api.get('/repos/atilacsilva/Github-Blog/issues')
    setIssues(response.data)
  }

  async function fetchIssues(/* query?: string */) {
    const userRepo = 'atilacsilva/Github-Blog'
    const text = 'About'

    try {
      const response = await api.get('/search/issues', {
        params: {
          q: `repo:${userRepo}+${text}+in:title`,
        },
      })
      setIssues(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    showIssues()
    fetchIssues()
  }, [])

  return (
    <IssueContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssueContext.Provider>
  )
}
