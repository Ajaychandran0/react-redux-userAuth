import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Container, Form } from "react-bootstrap";
import UsersData from "../../components/UsersData";
import { getUsers, reset } from "../../features/admin/usersSlice";
import Spinner from "../../components/Spinner";

function AdminDashboard() {
  const { admin } = useSelector((state) => state.admin);
  const { users, isLoading, isError, message } = useSelector(
    (state) => state.users
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log('hey in error');
      console.log(message);
    }

    if (!admin) {
      navigate("/admin/login");
    }

    dispatch(getUsers());
    return () => {
      console.log('hey in dispatch reset')
      dispatch(reset())
    }

  }, [admin, navigate, dispatch, isError, message]);

  const [search, setSearch] = useState("");

  const searchUser = () => {
    // dispatch(filterUser({search}))
  };

  let deletedata;

  if(isLoading){
    return <Spinner/>
  }

  return (
    <Container className="adminDashboard">
      {deletedata ? (
        <h3 style={{ color: "red" }}>User Deleted Successfully</h3>
      ) : (
        ""
      )}
      <Form style={{ width: "50%" }} className="d-flex mt-2 mb-2">
        <Form.Control
          type="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={searchUser} variant="outline-success">
          Search
        </Button>
      </Form>
      {users.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>ACCESS</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <UsersData key={user._id} data={user} index={i} />
            ))}
          </tbody>
        </Table>
      ) : (
        <h3> you have no users</h3>
      )}
    </Container>
  );
}

export default AdminDashboard;
