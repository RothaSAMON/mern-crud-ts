import { GET_ALL_USERS } from "../Graphql/Queries";
import { DELETE_USER } from "../Graphql/Mutation";
import { useMutation, useQuery } from "@apollo/client";

const ListOfUsers = () => {
  const { data, loading } = useQuery(GET_ALL_USERS);

  const [deleteUser, { error }] = useMutation(DELETE_USER);

  // const executeDelete = (id: number): void => {
  //   deleteUser(id);
  // };

  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div>
              {" "}
              {user.name} / {user.username}{" "}
              <button
                onClick={() => {
                  deleteUser({ variables: { id: user.id } });
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ListOfUsers;
