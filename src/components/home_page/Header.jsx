import {HOME_VIDEO_URL} from '../../utils/constants'

const Header = () => {
  return (
    <div>
      <video className="h-screen md:h-auto aspect-video fixed top-0 -z-1" autoPlay loop muted playsInline>
        <source src={HOME_VIDEO_URL} type="video/mp4" />
      </video>
    </div>
  )
}

export default Header
