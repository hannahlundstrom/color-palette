function Toolbar({colorCount, setColorCount}: {colorCount: number, setColorCount: React.Dispatch<React.SetStateAction<number>>}) {

  return (
    <div className="bg-gray-200 p-1 px-4 flex justify-between">
      <div>
        <button onClick={() => setColorCount(prev => prev-1)}>-</button>
        <span>{colorCount}</span>
        <button onClick={() => setColorCount(prev => prev+1)}>+</button>
      </div>
    </div>
  )
}

export default Toolbar
