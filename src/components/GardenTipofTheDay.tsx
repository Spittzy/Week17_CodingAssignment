import { useEffect, useState } from "react";
import type { Tip } from "../types";



export default function GardenTipOfTheDay() {
    const [tips, setTips] = useState<Tip[]>([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const fetchTip = async () => {
            setLoading(true)
            try {
                const response = await fetch('http://localhost:3000/tips')
                if (!response.ok) {
                    setErrorMessage(response.statusText)

                } else {
                    const data = await response.json()
                    setTips(data)
                }
            } catch (error: any) {
                setErrorMessage(error.message)
            }
            setLoading(false)
        }
        fetchTip()
    }, []);

    const getTipOfTheDay = (): string => {
        if (tips.length === 0) return "No tips available.";
        const randomIndex = Math.floor(Math.random() * tips.length); // Generate a random index
        return tips[randomIndex].text; // Return the text of the random tip
    };

    return (
        <div className="bg-success-subtle text-center">
            {
                loading ? (<p className="text-body-tertiary">Loading...</p>) :
                    errorMessage ? (<p className="text-danger">{errorMessage}</p>) :
                        (<strong>🌿 Tip of the Day: {getTipOfTheDay()} </strong>
                        )}
        </div>
    )
}