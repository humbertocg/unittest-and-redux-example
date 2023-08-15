import React from "react";
import { ResultItem } from "../types/userType";

export type EmpleadoItemType = {
    index: number;
  user: ResultItem;
  onSaveUser: (user: ResultItem, index: number) => void;
};

const EmpleadoItem = (props: EmpleadoItemType) => {
  const onSaveUser = () => {
    props.onSaveUser(props.user, props.index);
  };
  return (
    <div className="container">
      <div
        className="row align-items-center"
        style={{
          border: "1px solid black",
          padding: "10px",
          borderRadius: "25px",
          margin: "10px",
        }}
      >
        <div className="col-1">
          <img
            alt={`user profile ${props.user.name.title} ${props.user.name.first} ${props.user.name.last}`}
            src={props.user.picture.thumbnail}
            style={{ borderRadius: "25px", height: "64px", width: "64px" }}
          />
        </div>

        <div className="col" style={{ marginLeft: "15px" }}>
          <div>
            {props.user.hired.toString()} {props.user.name.title}{" "}
            {props.user.name.first} {props.user.name.last}
          </div>
          <div>{`Ubicacion: ${props.user.location.city} (${props.user.location.country})`}</div>
          <div>{props.user.email}</div>
          <div>{props.user.phone}</div>
        </div>
        <div className="col-sm-2">
          <div>
            <button
              style={{ width: "100%" }}
              type="button"
              className="btn btn-primary"
            >
              Ocultar
            </button>
            <button
              style={{ marginTop: "5px", width: "100%" }}
              type="button"
              className="btn btn-primary"
              data-testid={`onSave_${props.user.name.title}${props.user.name.first}${props.user.name.last}${props.index}`}
              onClick={onSaveUser}
            >
              {props.user.hired ? "Quitar" : "Guardar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpleadoItem;
