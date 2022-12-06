import { useClick } from "./useClick";

const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h2 ref={title}>Hello</h2>
    </div>
  );
};

export default App;
