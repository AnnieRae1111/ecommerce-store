import { Outlet } from "react-router-dom"
import { Fragment } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as CrwnLogo} from '../../../assets/crown.svg'
import '../navigation/navigation.styles.scss'

const Navigation = () => {

  return(
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
        <CrwnLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link classsName='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link classsName='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation