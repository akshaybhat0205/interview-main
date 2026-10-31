import React, { useEffect, useState } from "react";

const CRUD = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState();
  const getData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?q=${query}`
    );
    const saveData = await response.json();
    setUsers(saveData);
  };

  // useEffect(() => {
  //   getData();
  //  }, []);

  useEffect(() => {
    if (query) {
      const timerId = setTimeout(() => {
        getData();
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [query]);

  const postData = async () => {
    if (!query) {
      return;
    }
    const request = await fetch(`http://localhost:5000/api/products`, {
      method: "POST",
      body: JSON.stringify({
        name: "chips",
        quantity: 2,
        price: 20,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const response = await request.json();
    console.log(response);
    setUsers([...users, response]);
  };

  const updateData = async () => {
    if (!query) {
      return;
    }
    const request = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "PUT",
      body: JSON.stringify({
        name: query,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const response = await request.json();
    console.log(response);
    // setUsers([...users, response]);
    setUsers(users.map((user) => (user.name === query ? response : user)));
    setQuery("");
  };

  const deleteData = async () => {
    if (!query) {
      return;
    }
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/users/${query}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const response = await request.json();
    console.log(response);
    setUsers(users.filter((user) => user.name !== query));
  };

  return (
    <div>
      <h1>CRUD</h1>
      <div className="text-base">
        <input
          type="text"
          placeholder="Search"
          className="bg-slate-100 rounded-lg p-2 text-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {users?.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))}
      </div>
      <button onClick={() => postData()}>Create Post</button>
    </div>
  );
};

export default CRUD;
