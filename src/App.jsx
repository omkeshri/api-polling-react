import { Provider } from "react-redux";
import LiveChat from "./components/LiveChat";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <LiveChat />
      </Provider>
  );
}

export default App;
