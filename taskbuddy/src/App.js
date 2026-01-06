
import { TaskList } from './Components/TaskList';

function App() {
  const info="Pradnya"
  return (
   <>
   <div className="Text-Center">
    
    <TaskList info={info}/>
   </div>
   </>
  );
}

export default App;
