import { useContext } from 'react'
import { Header } from './components/Header'
import { IssueContext } from '../../contexts/IssueContext'
import { NavLink } from 'react-router-dom'
// import { format, formatDistanceToNow } from 'date-fns'
import { Search } from './components/Search'

export function Home() {
  const { issues } = useContext(IssueContext)

  return (
    <main className=" flex justify-center w-full bg-base-bg ">
      <section className=" max-w-5xl h-full flex flex-col mb-52">
        <Header />
        <Search />
        <section className=" grid grid-cols-2 gap-8">
          {issues.map((issue) => {
            return (
              <NavLink key={issue.created_at} to={'/issue'}>
                <div className="flex flex-col gap-5  bg-base-post rounded-xl p-8">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold font-body text-base-subtitle max-w-[20ch]">
                      {issue.title}
                    </h3>
                    <span className="font-body text-sm text-base-span">
                      {issue.created_at}
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
