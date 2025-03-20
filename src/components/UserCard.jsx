import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, about, photoUrl, age, gender } = user;
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img src={photoUrl} alt="user" width="100" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {firstName} {lastName}
          </h2>
          <p>{age + " , " + gender}</p>
          <p>{about}</p>
        </div>
        <div className="card-actions justify-center m-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
