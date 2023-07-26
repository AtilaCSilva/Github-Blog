import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { IssueContext } from '../../../contexts/IssueContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
  const { fetchIssues } = useContext(IssueContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  return (
    <section className="flex flex-col gap-3 w-full mt-[72px] mb-12">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold font-body text-base-subtitle">
          Publicações
        </h3>
        <span className="font-body text-sm text-base-span">6 publicações</span>
      </div>
      <form action="" onSubmit={handleSubmit(handleSearchIssues)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
          className="bg-base-input py-3 px-4 rounded-md w-full placeholder:text-base-label font-body text-base focus:outline-blue border-none outline-none"
        />
      </form>
    </section>
  )
}
