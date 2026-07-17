import ContrastWindow from "../ContrastWindow/ContrastWindow"
import Header from "../Header/Header"
import Palette from "../Palette/Palette"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex flex-1 justify-between">
        <Palette/>
        <ContrastWindow/>
      </main>
    </div>
  )
}

export default App
