import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { Welcome } from "./Welcome";

function App() {
  const [data, setData] = useState<
    firebase.firestore.QueryDocumentSnapshot[] | null
  >(null);
  useEffect(() => {
    const db = firebase.firestore().collection("scores");
    const query = db.orderBy("time", "asc").limit(10);
    return query.onSnapshot((next) => setData(next.docs));
  }, []);

  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <nav className="level">
        <p className="level-item has-text-centered">
          <h1 className="title is-1">Delta Chase Leaderboards</h1>
        </p>
      </nav>
      <div
        className="container"
        style={{
          border: "1px solid black",
          borderRadius: "2px",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {data === null ? (
          <progress className="progress is-info" max="100">
            60%
          </progress>
        ) : (
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr style={{ fontSize: 18 }}>
                <th>User</th>
                <th>Time taken</th>
              </tr>
            </thead>
            <tbody>
              {data
                .map((doc) => doc.data())
                .map((doc) => (
                  <tr>
                    <td>{doc.name}</td>
                    <td>{doc.time}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
      <footer
        className="footer"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: "8px 0px 8px 0px",
        }}
      >
        <div className="content has-text-centered">
          <p>
            <strong>
              Made with <span aria-label="love">💖</span> by{" "}
              <a href="https://github.com/arthuro555" rel="noopener noreferer">
                Arthur Pacaud
              </a>
            </strong>
          </p>
        </div>
      </footer>

      {showWelcome && <Welcome onClose={() => setShowWelcome(false)} />}
    </>
  );
}

export default App;