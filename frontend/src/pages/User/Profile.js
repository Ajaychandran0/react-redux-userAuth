// import { useState,useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom';
// import { MDBCol, MDBFile, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

// function Profile() {


//     return (
//         <section className='user-profile'>
//         <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
//       <MDBContainer>
//         <MDBRow className="justify-content-center">
//           <MDBCol md="12" lg="12" xl="12" className="mt-5">
//             <MDBCard style={{ borderRadius: '15px' }}>
//               {profiledata ? (
//                 <MDBCardBody className="p-4">

//                   <div className="d-flex text-black">

//                     <div className="flex-shrink-0">
//                       {
//                         <MDBCardImage
//                           style={{ width: '180px', borderRadius: '10px' }}
//                           src={
//                             profiledata.photo
//                               ? profiledata.photo
//                               : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
//                           }
//                           alt='Generic placeholder image'
//                           fluid />

//                       }

//                     </div>
//                     <div className="flex-grow-1 ms-3">
//                       <MDBCardTitle> {profiledata.firstname} {profiledata.lastname}</MDBCardTitle>
//                       <MDBCardText>{profiledata.email}</MDBCardText>
//                       <form>
//                         <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
//                           style={{ backgroundColor: '#efefef' }}>


//                           <MDBFile size='lg' id='formFileLg' onChange={(e) => setPhoto(e.target.files[0])} />
//                         </div>
//                         <div className="d-flex pt-1">
//                           <button outline onClick={addphoto} className="me-1 flex-grow-1" style={{backgroundColor:'black',color:'white'}}>Add Profile Picture</button>
//                           {/* <MDBBtn className="flex-grow-1">Follow</MDBBtn> */}
//                         </div>
//                       </form>
//                     </div>

//                   </div>

//                 </MDBCardBody>
//               ) : (
//                 ""
//               )}

             
//             </MDBCard>
           
//           </MDBCol>
//         </MDBRow>
       
//       </MDBContainer>
     
//         <Link to={'/'} >
//         <MDBBtn className='mx-2' color='dark' size='lg' style={{width:500,margin:20}}>
//         Return to Home
//               </MDBBtn>
//         </Link>
                
//        </div>

//         </section>
//     )
// }

// export default Profile
