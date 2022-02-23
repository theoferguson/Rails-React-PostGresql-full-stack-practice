import './DogContainer.css'

function PoopList({allPoops, setAllPoops}) {

    return (
        <>
        {
            allPoops.map((poop) => {
                return (
                    <div>{poop.name} pooped at {poop.pooped_at}</div>
                )
            })
        }
        </>
    )
}

export default PoopList