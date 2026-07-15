function ColorCard() {

  return (
    <article>
      <div className="color-preview">
      </div>
      <div className="color-details">
        <div className="color-info">
            <span className="color-name">Name</span>
            <span className="color-hex">#FFFFFF</span>
            <span className="color-nickname">Nickname</span>
        </div>
        <div className="color-actions">
            <span>Lock / Unlock</span>
        </div>
      </div>
    </article>
  )
}

export default ColorCard
