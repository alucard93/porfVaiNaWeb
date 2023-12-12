import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.scss'

import jose from '../../../public/jose.svg'

const SliderProject = () => {
  const listMedia = [
    {
      brand: 'Soulier',
      description:
        'Concluímos com sucesso o Projeto em um prazo de 37 dias. Minha contribuição incluiu o desenvolvimento do footer, das páginas institucionais e garantia de qualidade das páginas home e de produtos.',
      img: jose,
    },
    {
      brand: 'Abrakadabra',
      description:
        'Concluímos com sucesso o Projeto em um prazo de 37 dias. Minha contribuição incluiu o desenvolvimento do footer, das páginas institucionais e garantia de qualidade das páginas home e de produtos.',
      img: jose,
    },
    {
      brand: 'Barão Distribuidor',
      description:
        'Concluímos com sucesso o Projeto em um prazo de 37 dias. Minha contribuição incluiu o desenvolvimento do footer, das páginas institucionais e garantia de qualidade das páginas home e de produtos.',
      img: jose,
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  return (
    <Slider {...settings}>
      {listMedia.map((media, _) => (
        <div key={media.brand} className="wrapper-slider">
          <div className="container-text-sites">
            <h3 className="title-text-name-project">{media.brand}</h3>
            <p className="text-description-project">{media.description}</p>
            <Link className="link-project" to="//www.soulier.com.br/">
              Visite o projeto
            </Link>
          </div>
          <div className="container-img-border">
            <img src={media.img} alt="" />
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default SliderProject
