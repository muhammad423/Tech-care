import type { Patient } from "../types/patient"
import "./PatientList.css"

interface PatientListProps {
  patients: Patient[]
  selectedPatient: Patient
}

export default function PatientList({ patients, selectedPatient }: PatientListProps) {
  return (
    <div className="patient-list">
      <div className="patient-list-header">
        <h2 className="card-title-24pt">Patients</h2>
        <button className="search-btn">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="8" cy="8" r="6" stroke="#072635" strokeWidth="2" />
            <path d="M12 12L16 16" stroke="#072635" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="patient-list-items">
        {patients.map((patient, index) => (
          <div key={index} className={`patient-item ${patient?.name === selectedPatient?.name ? "active" : ""}`}>
            <img src={patient?.profile_picture || "/placeholder.svg"} alt={patient?.name} className="patient-avatar" />
            <div className="patient-details">
              <div className="patient-name body-emphasized-14pt" style={{ textAlign: 'start' }}>{patient?.name}</div>
              <div className="patient-info body-secondary-info-14pt">
                {patient?.gender}, {patient?.age}
              </div>
            </div>
            <button className="patient-menu">⋯</button>
          </div>
        ))}
      </div>
    </div>
  )
}
