import React, { useState } from "react";
import { Form, Button, Alert, Spinner, Container } from "react-bootstrap";

export default function TipsForm() {
    const [tip, setTip] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!tip.trim()) return;

        setStatus("submitting");

        try {
            const response = await fetch("http://localhost:3000/tips", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: tip.trim() }),
            });

            if (!response.ok) throw new Error("Network error");

            setStatus("success");
            setTip("");
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    return (
        <Container className="my-4">
            <h3>Add a Garden Tip of the Day</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="tipText">

                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Enter a helpful garden tip..."
                        value={tip}
                        onChange={(e) => setTip(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="success" type="submit" disabled={status === "submitting"}>
                    {status === "submitting" ? (
                        <>
                            <Spinner animation="border" size="sm" /> Submitting...
                        </>
                    ) : (
                        "Add Tip"
                    )}
                </Button>

                {status === "success" && (
                    <Alert variant="success" className="mt-3">
                        🌱 Tip added successfully!
                    </Alert>
                )}
                {status === "error" && (
                    <Alert variant="danger" className="mt-3">
                        ❌ Something went wrong. Please try again.
                    </Alert>
                )}
            </Form>
        </Container>
    );
};
