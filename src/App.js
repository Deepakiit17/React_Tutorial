import "./App.css";

function App() {
  const students = [
    { name: "anil", email: "anil@test.com", contact: 111 },
    { name: "peter", email: "peter@test.com", contact: 222 },
    { name: "sam", email: "sam@test.com", contact: 333 },
    { name: "sid", email: "sid@test.com", contact: 444 },
  ];
  return (
    <div className="App">
      <h1>Handle Array with List</h1>
      <br />
      <table border="1">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        {students.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.contact}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
