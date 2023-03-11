import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


function UsersData({ data, index }) {

    const deleteUser = (userId)=>{
        
    }

    let blockloading,blockuser
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>
                {" "}
                {blockloading ? (
                    <p>Loading</p>
                ) : (
                    <Button
                        onClick={() => blockuser(data._id)}
                        style={
                            data.status
                                ? { backgroundColor: "red", width: "100px" }
                                : { backgroundColor: "green", width: "100px" }
                        }
                    >
                        {" "}
                        {data.status ? "Block" : "Unblock"}{" "}
                    </Button>
                )}{" "}
            </td>
            <td>
                <Button
                    onClick={() => deleteUser(data._id)}
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
