import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getUsers } from "../api/apiRequest";
import { addAndHiredUsers, removeUser, setUsers } from "../store/userSlice";
import { ResultItem } from "../types/userType";
import EmpleadoItem from "./EmpleadoItem";
import useFetchData from "../customHooks/useFetch";

const Candidatos = () => {
  const users = useSelector((state: RootState) => state.user.results);
  const [candidatos, setCandidatos] = useState<ResultItem[]>([]);
  //const { data, error, isLoading } = useFetchData("/api/?results=6");
  const dispatch = useDispatch();

  //console.log({ data, error, isLoading });

  const onSaveUser = async (user: ResultItem, index: number) => {
    /*let mappedUsers: ResultItem[] = [];
    if (user.hired === false) {
      const response = await fetchData(1);
      if (response) {
        mappedUsers = onMappedUsers(response.results);
      }

      dispatch(
        addAndHiredUsers({ user, hired: !user.hired, results: mappedUsers })
      );
    } else {
      dispatch(removeUser({ user }));
    }*/

    const response = await fetchData(1);
    if (response) {
      const mappedUsers = onMappedUsers(response.results);
      dispatch(addAndHiredUsers({ user }));
      candidatos[index] = mappedUsers[0];
      setCandidatos([...candidatos]);
    }
  };

  const fetchData = async (totalItems: number) => {
    try {
      const response = await getUsers(totalItems);
      return response;
    } catch (ex) {
      console.log(ex);
    }
  };

  const onSaveUserState = (users: ResultItem[]) => {
    //dispatch(setUsers(users));
    setCandidatos(users);
  };

  const onMappedUsers = (usersArray: ResultItem[], index?: number) => {
    const mappedResponse = usersArray.map((item) => {
      const newItem: ResultItem = {
        ...item,
        hired: false,
        currentLocation: "",
      };
      return newItem;
    });
    return mappedResponse;
  };

  useEffect(() => {
    if (users.length === 0) {
      const getUsersAPI = async () => {
        const response = await fetchData(6);
        if (response !== undefined) {
          const mappedUsers = onMappedUsers(response.results);
          onSaveUserState(mappedUsers);
        }
      };
      getUsersAPI();
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        {candidatos
          .filter((item) => item.hired === false)
          .map((user, index) => {
            return (
              <div
                className="col-4 "
                key={`${user.name.title}${user.name.first}${user.name.last}${index}`}
                data-testid={`${user.name.title}${user.name.first}${user.name.last}${index}`}
              >
                <EmpleadoItem
                  key={index}
                  index={index}
                  user={user}
                  onSaveUser={onSaveUser}
                />
              </div>
            );
          })}
      </div>
      -------------------------
      {users
        .filter((item) => item.hired === false)
        .map((user, index) => {
          return (
            <div
              key={`${user.name.title}${user.name.first}${user.name.last}${index}`}
              data-testid={`SavedItems_${user.name.title}${user.name.first}${user.name.last}${index}`}
            >
              <EmpleadoItem
                key={index}
                index={index}
                user={user}
                onSaveUser={(user) => dispatch(removeUser({ user }))}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Candidatos;
