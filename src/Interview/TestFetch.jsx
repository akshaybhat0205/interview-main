import React from "react";
import CustomFetchHook from "./CustomFetchHook";

const TestFetch = () => {
  const { data, isLoading, error } = CustomFetchHook(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );
  return (
    <div>
      <h1>Test Fetch</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error &&
        data &&
        data.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
};

export default TestFetch;
