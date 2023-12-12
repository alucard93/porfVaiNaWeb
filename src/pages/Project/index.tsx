import CoverCard from '../../components/CoverCard'
import Slider from '../../components/Slider'

const Project = () => {
  return (
    <div className="container__project">
      <CoverCard
        title="<br />"
        image="/image.jpg"
        subTitle=""
        text=""
        link=""
      />

      <div className="gey">
       <Slider/>
      </div>
    </div>
  )
}

export default Project
