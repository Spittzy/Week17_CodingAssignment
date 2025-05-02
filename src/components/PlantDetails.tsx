import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Plant } from "../types"
import PlantInfoTable from "./PlantInfoTable"

export default function PlantDetails() {
    const { plantId } = useParams()
    const [plant, setPlant] = useState<null | Plant>(null)

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch('http://localhost:3000/plants/' + plantId)
            const data = await response.json()
            setPlant(data)
        }
        fetchProduct()
    })
    if (!plant) {
        return (<div>Loading...</div>)
    }
    return (
        <div>
            <h1>{plant.name}</h1>
            <PlantInfoTable plant={plant} />
            <h4 className="text-center">Care</h4>
            <p className="text-center">{plant.care}</p>
            <h4 className="text-center">Harvesting</h4>
            <p className="text-center">{plant.harvest}</p>

        </div>
    )
}