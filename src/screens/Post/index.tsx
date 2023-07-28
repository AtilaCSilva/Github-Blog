import GituhubIcon from '../../assets/GitIcon.svg'
import calendarIcon from '../../assets/calendar.svg'
import speechBubbleIcon from '../../assets/bubble.svg'
import LinkIcon from '../../assets/linkTo.svg'
import { NavLink } from 'react-router-dom'
import LessSign from '../../assets/less.svg'
import { PostIssue } from './components/PostIssue'

export function Post() {
  return (
    <main className="flex justify-center">
      <section className=" max-w-5xl h-full flex flex-col mb-52">
        <header className="w-auto mt-[-5rem] bg-base-profile rounded-xl flex gap-8 px-10 py-8">
          <div className=" flex flex-col gap-2 w-full">
            <div className="flex justify-between">
              <NavLink
                to={'/'}
                className="flex items-center gap-2 text-blue font-body font-bold uppercase text-xs underline decoration-transparent hover:decoration-blue transition ease-linear delay-150"
              >
                <img
                  src={LessSign}
                  alt="Sinal de Menor, seta apontada para trás"
                />
                <span>Voltar</span>
              </NavLink>
              <a
                href="https://github.com/atilaCSilva"
                className="flex items-center gap-2 text-blue font-body font-bold uppercase text-xs underline decoration-transparent hover:decoration-blue transition ease-linear delay-150"
              >
                <span>Ver no Github</span>
                <img src={LinkIcon} alt="" />
              </a>
            </div>
            <h3 className="text-base-title text-2xl font-bold font-body">
              JavaScript data types and data structures
            </h3>
            <ul className="flex gap-6">
              <li className="flex items-center gap-2   ">
                <img src={GituhubIcon} alt="" />
                <span className="text-base-title font-body text-base ">
                  atilacsilva
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img src={calendarIcon} alt="" />
                <span className="text-base-title  font-body text-base ">
                  Há 1 dia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img src={speechBubbleIcon} alt="" />
                <span className="text-base-title  font-body text-base ">
                  5 comentários
                </span>
              </li>
            </ul>
          </div>
        </header>
        <PostIssue />
      </section>
    </main>
  )
}
