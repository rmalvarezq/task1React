import "./App.css";
import { Grid1 } from "./components/Grid1";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Grid1
        title="iPhone 12"
        subtitle="Morado. Soñado."
        subtitle2="Muy pronto disponible en morado"
        image="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/icons%2Fiphone.JPG?alt=media&token=9c9fd6da-554b-4e96-aa70-3059f5c200d5"
        clase="wrapper"
      ></Grid1>
      <Grid1
        title="iPhone 12"
        subtitle="Morado. Soñado."
        subtitle2="Muy pronto disponible en morado"
        image="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/icons%2Fiphone.JPG?alt=media&token=9c9fd6da-554b-4e96-aa70-3059f5c200d5"
        clase="wrapper"
      ></Grid1>
    </div>
  );
}

export default App;
