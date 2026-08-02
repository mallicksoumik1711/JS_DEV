// import Counter from "./hooks/counter/Counter";
// import ChangeColor from "./hooks/colorchanger/ChangeColor";
// import Card from "./props/Card";
// import CounterPrevcounter from "./hooks/interviewquestion/Counter_Prevcounter";
import BgColorChanger from "./hooks/bgcolorchange/BgColorChanger";

function App() {

  return (
    <div>
      {/* <Counter/> */}
      {/* <ChangeColor/> */}
      {/* <Card imgUrl="https://images.unsplash.com/photo-1773332611628-9e1bdce4881b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" heading="Yoga se hoga" /> */}
      {/* <CounterPrevcounter/> */}
      <div className="mt-130 p-10">
        <BgColorChanger />
      </div>
    </div>
  );
}

export default App;
