import css from "../src/App.module.css"
import Sidebar from "./components/Sidebar"
import NavBarForm from "./components/NavBarForm"
import ContentAPIHooks from "./components/ ContentAPIHooks";


function App() {
  return (
    <div className={css.App}>
    <NavBarForm/>
    <Sidebar />
    <ContentAPIHooks />
    </div>
  );
}

export default App;