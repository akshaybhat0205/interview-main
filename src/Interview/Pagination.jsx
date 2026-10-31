import { useState, useEffect } from "react";

function Pagination() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Calculate pagination indexes
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;

  // Get users for current page
  const currentUsers = users.slice(firstIndex, lastIndex);

  // Calculate total pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div>
      <h2>User List</h2>

      {currentUsers.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <hr />
        </div>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span> Page {currentPage} of {totalPages} </span>

      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;