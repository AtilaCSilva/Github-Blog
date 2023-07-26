import Github from '../../../assets/GitIcon.svg'
import Company from '../../../assets/companyIcon.svg'
import Followers from '../../../assets/followersIcon.svg'
import LinkIcon from '../../../assets/linkTo.svg'
import { useEffect, useState } from 'react'
import { api } from '../../../libs/api'

interface UserData {
  avatar_url: string
  login: string
  name: string
  company: string | null
  followers: number | null
  bio: string
}

export function Header() {
  const [userInfo, setUserInfo] = useState<UserData | undefined>(undefined)
  async function catchUserData() {
    try {
      const response = await api.get('/users/atilaCSilva')
      setUserInfo(response.data)
    } catch (error) {
      console.error('Erro ao tentar carregar dados do usuário', error)
    }
  }

  useEffect(() => {
    catchUserData()
  }, [])

  return (
    <header className="w-auto mt-[-5rem] bg-base-profile rounded-xl flex items-center gap-8 px-10 py-8">
      <div className=" w-36 ">
        <img
          src={userInfo && userInfo.avatar_url}
          alt=""
          className="rounded-lg  w-full"
        />
      </div>
      <div className=" flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          <h3 className="text-base-title text-2xl font-bold font-body">
            {userInfo && userInfo.name}
          </h3>
          <a
            href="https://github.com/atilaCSilva"
            className="flex items-center gap-2 text-blue font-body font-bold uppercase text-xs underline decoration-transparent hover:decoration-blue transition ease-linear delay-150"
          >
            <span>Github</span>
            <img src={LinkIcon} alt="" />
          </a>
        </div>
        <p className="font-body text-base text-base-text max-w-[65ch]">
          {userInfo && userInfo.bio}
        </p>
        <ul className="flex gap-6 mt-4">
          <li className="flex items-center gap-2   ">
            <img src={Github} alt="" />
            <span className="text-base-title font-body text-base ">
              {userInfo && userInfo.login}
            </span>
          </li>
          {userInfo?.company ? (
            <li className="flex items-center gap-2">
              <img src={Company} alt="" />
              <span className="text-base-title  font-body text-base ">
                {userInfo && userInfo.company}
              </span>
            </li>
          ) : (
            <li></li>
          )}
          <li className="flex items-center gap-2">
            <img src={Followers} alt="" />
            <span className="text-base-title  font-body text-base ">
              {userInfo && userInfo.followers} Seguidores
            </span>
          </li>
        </ul>
      </div>
    </header>
  )
}
