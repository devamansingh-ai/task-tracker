import Header from "./components/Header";
function App() {
  const name = 'Brad'
  const x = false
  return (
    <div className="container">
     <h1>Hello Tracker App</h1>
     <h2>next jsx element {name}</h2>
     <h2>next jsx element {1+1}</h2>
     <h2>{x ? 'yes' : "no"}</h2>
     <Header />
    </div>
    
  );
}
// class App extends React.Component{
//   render(){
//     return <h1>hello from class</h1>
//     }
//   }
export default App;
