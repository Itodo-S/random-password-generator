const generateRandomPassword = require("./passwordGenerator");

function App() {
  const password = generateRandomPassword(10, true, true, true, true);
  console.log(password);

  return (
    <div className="app">
      <div className="title-container">
        <p className="title">Random Password Generator Script with tests</p>
      </div>

      <div className="description-container">
        <p className="para">
          A Random Password Generator script that generates random passwords of
          a specified length and strength, containing a mix of uppercase
          letters, lowercase letters, numbers, and special characters.
        </p>
        <p className="inst-text">Installation</p>
        <ul className="ul">
          <li className="">
            Clone the repository: git clone{" "}
            <a href="/">
              https://github.com/Itodo-S/random-password-generator.git
            </a>
          </li>
          <li>cd random-password-generator</li>
          <li>npm install</li>
          <li>npm test</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
