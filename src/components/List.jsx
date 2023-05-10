import React from "react";
import Card from "./Card";

const List = (props) => {
  return (
    <>
      {props.userInfos.length > 0 ? (
        <>
          {props.userInfos.map((info) => {
            return (
              <Card css={"card-mt"} key={info.email}>
                <div className="list">
                  <p>Name: {info.name}</p>
                  <p>From: {info.live}</p>
                  <p>Email: {info.email}</p>
                </div>
              </Card>
            );
          })}
        </>
      ) : (
        <>
          <Card css={"card-mt"}>
            <div className="list">
              <p style={{ textAlign: "center" }}>There is No User Right Now!</p>
            </div>
          </Card>
        </>
      )}
    </>
  );
};

export default List;
