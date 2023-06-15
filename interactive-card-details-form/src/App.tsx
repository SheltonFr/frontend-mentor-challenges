import { useState } from "react";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import Form from "./components/Form";

function App() {
  const [name, setName] = useState<string | undefined>(undefined);
  const [cvc, setCvc] = useState<string | undefined>(undefined);
  const [number, setNumber] = useState<string | undefined>(undefined);
  const [year, setYear] = useState<string | undefined>(undefined);
  const [mounth, setMounth] = useState<string | undefined>(undefined);



  return (
    <main className="flex flex-row">
      <aside className="aside-bg bg-slate-700 h-screen w-1/3 relative">
        <CardFront name={name} mounth={mounth} number={number} year={year} />
        <CardBack cvc={cvc} />
      </aside>
      <section className="h-screen w-2/3 bg-white grid place-content-center">
        <Form />
      </section>
    </main>
  );
}

export default App;
