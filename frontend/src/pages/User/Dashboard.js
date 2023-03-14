import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Layout from "../../components/Layout"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';


function Dashboard() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <Layout title='home'>
      <section className="page-name">
        <MDBCard style={{ width: '35%'}} >

          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage style={{ width: '100%' }} src={user ? user.image_url? user.image_url : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png':''} alt="" />         
          </MDBRipple>

          <MDBCardBody>
            <MDBCardTitle> Name: {user ? user.name : ''} </MDBCardTitle>
            <Link to={'/user'} >
              <button className="btn btn-secondary">profile</button>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </section>

    </Layout>
  )
}

export default Dashboard
