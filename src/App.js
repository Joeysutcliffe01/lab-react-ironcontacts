import allContacts from "./contacts.json";
import "./App.css";
import {useState} from 'react';

function App() {
  const firstFive = allContacts.slice(0.5);
  const [celebs, setCelebs] = useState(firstFive)

  return <div className="App">
  <h1>Iron Contacts</h1>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {celebs.map((elem, index) =>
        return(
          <tr key={elem.name + index}> 
            <td>
              <img 
              src={elem.pictureUrl} 
              alt="celeb pic" 
              style={{ height: "100px"}}
              />
            </td>
          </tr>
        )
        
        )}
      </tbody>
    </table>
  </div>;
}

export default App;
