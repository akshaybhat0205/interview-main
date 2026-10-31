import { useState, useEffect } from "react";

function InfiniteScroll() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch users based on page number
  const fetchUsers = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );

      const data = await response.json();

      // Append new users to existing users
      setUsers((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  // Detect when user reaches the bottom
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10
    ) {
      if (!loading) {
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div>
      <h2>Infinite Scroll</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.title}</h3>
          <p>{user.body}</p>
        </div>
      ))}

      {loading && <p>Loading...</p>}
    </div>
  );
}

export default InfiniteScroll;