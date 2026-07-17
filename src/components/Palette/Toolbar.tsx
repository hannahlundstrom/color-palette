interface ToolbarProps {
  colorCount: number;
  setColorCount: React.Dispatch<React.SetStateAction<number>>;
  randomizeColors: () => void;
}

function Toolbar({
  colorCount,
  setColorCount,
  randomizeColors
}: ToolbarProps) {

  return (
    <div className="bg-gray-200 p-1 px-4 flex justify-between">
      <div>
        <button onClick={() => setColorCount(prev => prev-1)}>-</button>
        <span>{colorCount}</span>
        <button onClick={() => setColorCount(prev => prev+1)}>+</button>
      </div>
      <button onClick={randomizeColors}>Reroll</button>
    </div>
  )
}

export default Toolbar
