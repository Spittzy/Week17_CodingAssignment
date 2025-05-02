
import { Card } from "react-bootstrap"
import { Plant } from "../types"


type PlantInfoTableProps = {
    plant: Plant
}

export default function PlantInfoTable({ plant }: PlantInfoTableProps) {
    return (
        <Card style={{ width: '10rem' }}>
            <table>
                <tbody>
                    <tr>
                        <td>Light:</td>
                        <td>{plant.light}</td>
                    </tr>
                    <tr>
                        <td>Height:</td>
                        <td>{plant.height + 'cm'}</td>
                    </tr>

                </tbody>
            </table>
        </Card>
    )

}