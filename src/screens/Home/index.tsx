import { useContext } from 'react'
import { Header } from './components/Header'
import { IssueContext } from '../../contexts/IssueContext'
import { NavLink } from 'react-router-dom'
import { Search } from './components/Search'
import { dateFormatter } from '../../utils/formatter'

export function Home() {
  const { issues, showOneIssue } = useContext(IssueContext)

  function handleGetOneIssue(data: number) {
    showOneIssue(data)
  }

  return (
    <main className=" flex justify-center w-full bg-base-bg ">
      <section className=" max-w-5xl h-full flex flex-col mb-52">
        <Header />
        <Search />
        <section className=" grid grid-cols-1 gap-8 sm:grid-cols-2">
          {issues.map((issue) => {
            return (
              <NavLink
                key={issue.number}
                to={'/issue'}
                onClick={() => {
                  handleGetOneIssue(issue.number)
                }}
              >
                <div className="flex flex-col gap-5 h-44 bg-base-post rounded-xl p-8 border-2 border-transparent hover:border-base-label transition-all delay-100 ease-linear">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold font-body text-base-subtitle max-w-[20ch]">
                      {issue.title}
                    </h3>
                    <span className="font-body text-sm text-base-span">
                      {dateFormatter.format(new Date(issue.created_at))}
                    </span>
                  </div>
                  <p className="text-base font-body overflow-hidden text-ellipsis whitespace-nowrap">
                    {issue.body}
                  </p>
                </div>
              </NavLink>
            )
          })}
        </section>
      </section>
    </main>
  )
}
