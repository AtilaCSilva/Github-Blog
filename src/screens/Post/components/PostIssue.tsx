import { useContext } from 'react'
import { IssueContext } from '../../../contexts/IssueContext'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export function PostIssue() {
  const { fullIssue } = useContext(IssueContext)

  return (
    <section className=" flex flex-col mt-12">
      <div
        key={fullIssue.number}
        className="flex flex-col gap-5 rounded-xl p-8 border-2 border-transparent"
      >
        <div className="flex justify-between">
          <ReactMarkdown className="text-xl font-bold font-body text-base-subtitle max-w-[20ch]">
            {fullIssue.title}
          </ReactMarkdown>
        </div>
        <ReactMarkdown className="text-base font-body">
          {fullIssue.body}
        </ReactMarkdown>
      </div>
    </section>
  )
}
