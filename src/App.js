import allContacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const firstFive = allContacts.slice(0, 5);
  const [celebs, setCelebs] = useState(firstFive);
  const setOfCelebs = new Set(celebs);

  function pickRandomCeleb() {
    return Math.floor(Math.random() * allContacts.length);
  }

  function deleteCharacter(characterIdToFind) {
    setOfCelebs.forEach((elem) => {
      if (elem.id === characterIdToFind) {
        setOfCelebs.delete(elem);
      }
    });
    setCelebs(() => {
      return [...setOfCelebs];
    });
  }

  return (
    <div className="App">
      <h1>Iron Contacts</h1>

      <div className="topContainer">
        <button
          onClick={() => {
            console.log(setOfCelebs);
            let randomNum = pickRandomCeleb();
            if (!setOfCelebs.has(randomNum)) {
              setOfCelebs.add(allContacts[randomNum]);
              setCelebs((celebs) => {
                return [...celebs, allContacts[randomNum]];
              });
            }
          }}
        >
          Add random celebrity
        </button>

        <button
          onClick={() => {
            setCelebs((celebs) => {
              return Array.from(setOfCelebs).sort((a, b) => {
                if (a.name > b.name) {
                  return 1;
                } else {
                  return -1;
                }
              });
            });
          }}
        >
          Sort by Name
        </button>

        <button
          onClick={() => {
            setCelebs((celebs) => {
              return Array.from(setOfCelebs).sort((a, b) => {
                if (a.popularity > b.popularity) {
                  return -1;
                } else {
                  return 1;
                }
              });
            });
          }}
        >
          Sort by Name
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th className="Head">Picture</th>
            <th className="Head">Name</th>
            <th className="Head">Popularity</th>
            <th className="Head">Won Oscar</th>
            <th className="Head">Won Emmy</th>
            <th className="Head">Actions</th>
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
                <td>
                  {
                    <button
                      onClick={() => {
                        return deleteCharacter(elem.id);
                      }}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
