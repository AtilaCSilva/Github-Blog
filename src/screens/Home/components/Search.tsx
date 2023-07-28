import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { IssueContext } from '../../../contexts/IssueContext'
import { api } from '../../../libs/api'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface IssuesAmount {
  open_issues: number
}

export function Search() {
  const { fetchIssues } = useContext(IssueContext)

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
    reset()
  }

  const [amount, setAmount] = useState<IssuesAmount | undefined>(undefined)
  async function catchUserData() {
    try {
      const response = await api.get('/repos/atilacsilva/Github-Blog')
      setAmount(response.data)
    } catch (error) {
      console.error('Erro ao tentar carregar dados do usuário', error)
    }
  }

  useEffect(() => {
    catchUserData()
  }, [])

  return (
    <section className="flex flex-col gap-3 w-full mt-[72px] mb-12">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold font-body text-base-subtitle">
          Publicações
        </h3>

        <span className="font-body text-sm text-base-span">
          {amount && amount.open_issues} publicações
        </span>
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
