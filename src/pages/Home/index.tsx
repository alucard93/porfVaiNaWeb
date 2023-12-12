import CoverCard from '../../components/CoverCard'

import './index.scss'

const Home = () => {
  return (
    <>
      <article>
        <section className="container__home__project">
          <CoverCard
            title="M<br />V"
            image="/image.jpg"
            subTitle="Sobre mim"
            text={`Desenvolvedor Web Full Stack pela Kenzie Academy Brasil e completamente apaixonado por tecnologia, com mais de 2000 horas de vivência na área de programão. Experiência em execução de mais de 40 projetos utilizando as tecnologias do Front End e Back End, além de mais 56 horas de estudo e aprimoramento semanal.`}
            link="#"
          />
        </section>
      </article>
    </>
  )
}

export default Home
