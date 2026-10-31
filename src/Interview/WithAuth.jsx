function withAuth(WrappedComponent) {
  return (props) => {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please Login First</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;

// usage
// import withAuth from "./withAuth";

// function Dashboard() {
//   return <h2>Welcome to Dashboard</h2>;
// }

// // Wrap Dashboard with HOC
// export default withAuth(Dashboard);