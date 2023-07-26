import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { IssuesProvider } from './contexts/IssueContext'

export function App() {
  return (
    <BrowserRouter>
      <IssuesProvider>
        <Router />
      </IssuesProvider>
    </BrowserRouter>
  )
}
