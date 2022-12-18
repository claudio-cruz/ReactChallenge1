import Sidebar from "./components/Sidebar"
// import NavBarSimple from "./components/NavBarSimple"
import NavBarForm from "./components/NavBarForm"
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
    {/* <NavBarSimple /> */}
    <NavBarForm/>
    <Sidebar />
    <Content />
    </div>
  );
}

export default App;