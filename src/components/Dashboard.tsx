"use client"

import { useEffect, useState } from "react"
import Header from "./Header"
import PatientList from "./PatientList"
import DiagnosisHistory from "./DiagnosisHistory"
import PatientInfo from "./PatientInfo"
import type { Patient } from "../types/patient"
import "./Dashboard.css"

export default function Dashboard() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const jessicaTaylor = patients.find((p) => p.name === "Jessica Taylor")

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
          method: "GET",
          headers: {
            Authorization: "Basic " + btoa("coalition:skills-test"),
          },
        })

        if (!response.ok) {
          throw new Error("Failed to fetch patient data")
        }

        const data = await response.json()
        setPatients(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchPatients()
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading patient data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
      </div>
    )
  }

  if (!jessicaTaylor) {
    return (
      <div className="error-container">
        <p>Patient data not found</p>
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <aside className="sidebar">
          <PatientList patients={patients} selectedPatient={jessicaTaylor} />
        </aside>
        <section className="center-panel">
          <DiagnosisHistory patient={jessicaTaylor} />
        </section>
        <aside className="right-panel">
          <PatientInfo patient={jessicaTaylor} />
        </aside>
      </main>
    </div>
  )
}
