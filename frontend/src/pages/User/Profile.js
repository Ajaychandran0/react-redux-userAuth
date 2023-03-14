import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { MDBCol, MDBFile, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Layout from '../../components/Layout';
import { changeUserImage, getUserData } from '../../features/auth/authSlice';
import Spinner from "../../components/Spinner";


function Profile() {
  const [photo, setPhoto] = useState('')
  const dispatch = useDispatch()
  const { user, isError, isLoading, message } = useSelector((state) => state.auth)


  const addphoto = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "my-user-app");
    data.append("cloud_name", "dth0telv9");

    fetch("https://api.cloudinary.com/v1_1/dth0telv9/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(changeUserImage(data.url))
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />
  }
 console.log(user,'in user profile')
  return (
    <Layout title='User Profile'>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="12" xl="12" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    {
                      <MDBCardImage
                        style={{ width: '180px', borderRadius: '10px' }}
                        src={
                          user?.image_url
                            ? user.image_url
                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                        }
                        alt='Generic placeholder image'
                        fluid />
                    }
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle> Name: {user?.name}</MDBCardTitle>
                    <MDBCardText>Email: {user?.email}</MDBCardText>

                    <form>
                      <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ backgroundColor: '#efefef' }}>
                        <MDBFile size='lg' id='formFileLg' onChange={(e) => setPhoto(e.target.files[0])} />
                      </div>

                      <div className="d-flex pt-1">
                        <button onClick={addphoto} className="me-1 flex-grow-1" style={{ backgroundColor: 'black', color: 'white' }}>Add Profile Picture</button>
                      </div>
                    </form>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <Link to={'/'} >
        <MDBBtn className='mx-2' color='dark' size='lg' style={{ width: 500, margin: 20 }}>
          Return to Home
        </MDBBtn>
      </Link>

    </Layout>
  )
}

export default Profile
