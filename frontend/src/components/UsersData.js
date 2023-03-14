import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, blockUser } from '../features/admin/usersSlice'
import { useEffect } from "react";


function UsersData({ data, index }) {
    // const {users} = useSelector(state=>state.users)
    const dispatch = useDispatch()

    const delUser = (userId) => {
        dispatch(deleteUser(userId))
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
