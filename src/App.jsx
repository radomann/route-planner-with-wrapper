import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMap from "./MyMap";
import config from "../config";
import "./App.css";

const center = { lat: 42.4413, lng: 19.2618 };

const render = (status) => {
  if (status === Status.FAILURE) return "Some error happened!";
  return "Loading...";
};

const App = () => (
  <Wrapper apiKey={config.VITE_API_GOOGLE_API_KEY} render={render}>
    <MyMap center={center} zoom={12} />
  </Wrapper>
);

export default App;
