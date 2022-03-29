import allContacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const firstFive = allContacts.slice(0.5);
  const [celebs, setCelebs] = useState(firstFive);

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {celebs.map((elem, index) => {
            let trophy = "";
            let emmy = "";

            if (elem.wonOscar === true) {
              trophy = "🏆";
            }
            if (elem.wonEmmy === true) {
              emmy = "🌟";
            }

            return (
              <tr key={elem.name + index}>
                <td>
                  <img
                    src={elem.pictureUrl}
                    alt="celeb pic"
                    style={{ height: "100px" }}
                  />
                </td>
                <td>
                  <h3>{elem.name}</h3>
                </td>
                <td>
                  <h3>{elem.popularity}</h3>
                </td>
                <td>
                  <h3>{trophy}</h3>
                </td>
                <td>
                  <h3>{emmy}</h3>
                </td>
                <td>{/* <button> Delete </button> */}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;