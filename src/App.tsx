import { DrawingBoard } from "./components/drawing_board";

const App = () => {
  return (
    <main className="w-screen h-screen bg-black text-white">
      <section className="container m-auto w-full min-h-screen ">
        <div className="w-full h-full flex flex-col items-center">
          <h1 className="text-3xl"> Drawing board </  h1>
          <DrawingBoard />
        </div>
      </section>
    </main>
  );
};

export default App;
