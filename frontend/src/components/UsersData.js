import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, blockUser } from '../features/admin/usersSlice'
import { useEffect } from "react";
import Swal from 'sweetalert2'



function UsersData({ data, index }) {
    // const {users} = useSelector(state=>state.users)
    const dispatch = useDispatch()

    const delUser = (userId) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(userId))

                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    return (

        <tr>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>
                {" "}
                {(
                    <Button
                        onClick={() => dispatch(blockUser(data._id))}
                        style={
                            data.isActive
                                ? { backgroundColor: "red", width: "100px" }
                                : { backgroundColor: "green", width: "100px" }
                        }
                    >
                        {" "}
                        {data.isActive ? "Block" : "Unblock"}{" "}
                    </Button>
                )}{" "}
            </td>
            <td>
                <Button
                    onClick={() => delUser(data._id)}
                    style={{ backgroundColor: "red" }}
                >
                    {" "}
                    Delete
                </Button>
            </td>
        </tr>

    );
}

export default UsersData
