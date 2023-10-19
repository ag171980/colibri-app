import "./App.css";
import RouterPage from "./router/Router";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterPage />
      </Provider>
    </div>
  );
}

export default App;
