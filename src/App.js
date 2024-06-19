const generateRandomPassword = require('./passwordGenerator');


function App() {

const password = generateRandomPassword(10, true, true, true, true);
console.log(password);

  return (
    <div className="">
    
    </div>
  );
}

export default App;
