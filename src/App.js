import "./App.css";
import { Table } from "react-bootstrap";

function App() {
  const students = [
    { name: "anil", email: "anil@test.com", contact: 111 },
    { name: "peter", email: "peter@test.com", contact: 222 },
    { name: "sam", email: "sam@test.com", contact: 333 },
    { name: "sid", email: "sid@test.com", contact: 444 },
  ];
  return (
    <div className="App">
      <h1>List with Bootstrap Table</h1>
      <br />
      <Table striped variant="dark">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
          {students.map((data, i) => (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
