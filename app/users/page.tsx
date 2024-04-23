{
  /*the pages inside app folder are server side rendering component*/
}

import Link from "next/link";
import React from "react";
import ProductCard from "../components/ProductCard";

interface IUser {
  id: number;

  name: string;
}

const Userpage = async () => {
  // we use fetch function to get the data from the api
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", //use this to disabling cache
  });
  //next js generally store the data in cache memory and when ever we want same piece of data next js g=provide the data from cache. but in this case

  //id we have data which change frequently then we can disable cache memory or treat data in cache as fresh for the certain period of time

  const users: IUser[] = await res.json();

  return (
    <main>
      <h1 style={{ color: "red" }}>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default Userpage;
