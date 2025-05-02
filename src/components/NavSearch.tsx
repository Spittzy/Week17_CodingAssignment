import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { Plant } from "../types";



export default function NavSearch() {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        const fetchPlants = async () => {
            setLoading(true);
            setErrorMessage("");

            try {
                const response = await fetch(
                    `http://localhost:3000/plants`
                );
                if (!response.ok) throw new Error("Failed to fetch plants");

                const data = await response.json();
                setPlants(data);
            } catch (error: any) {
                setErrorMessage(error.message);
            }

            setLoading(false);
        };

    }, [])

    return (

        <Row className="mb-3">
            <Col md={10}>
                <Form.Control
                    type="text"
                    placeholder="Search by plant name..."

                />
            </Col>
            <Col>
                <button></button>
            </Col>
        </Row>


    )

}