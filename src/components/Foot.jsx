

function Foot({link}) {
  return (
    <div className="foot_link">
        <h2>{link.mainLink}</h2>
        {
            link.subLinks.map((a, id) => <p key={id}>{a}</p>)
        }
    </div>
  )
}

export default Foot