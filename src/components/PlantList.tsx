import { Link, useLoaderData } from "react-router-dom"

import type { Plant } from "../types"


export const plantListLoader = async () => {

    const response = await fetch("http://localhost:3000/plants")
    if (!response.ok) {
        throw new Error(response.statusText)
        // setError('Oops! There was an error:' + response.statusText)
    }
    const data = await response.json()
    return data
    //  setError(null)


}

export default function PlantList() {
    const plants = useLoaderData() as Plant[]

    return (
        <>
            <h2 className="display-5 m-4">Learn More About A Plant Below:</h2>
            <div className="d-flex flex-wrap gap-3 m-3">

                {plants.map(plant => (
                    <div className="d-flex flex-wrap gap-3" key={plant.id}>
                        <div className="card flex-grow-1">
                            <div className="card-body">
                                <h3 className="card-title">{plant.name}</h3>
                                <p className="card-text">Light: {plant.light}</p>
                                <p className="card-text">Height: {plant.height} cm</p>
                                <p><Link to={'/plants/' + plant.id}>More Info</Link></p>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}