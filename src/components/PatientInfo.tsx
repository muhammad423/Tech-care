import type { Patient } from "../types/patient"
import "./PatientInfo.css"

interface PatientInfoProps {
  patient: Patient
}

export default function PatientInfo({ patient }: PatientInfoProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <>
      <div className="patient-info-card">
        <div className="patient-profile">
          <img src={patient?.profile_picture || "/layer2.png"} alt={patient?.name} className="profile-picture" />
          <h2 className="card-title-24pt patient-name">{patient?.name}</h2>
        </div>

        <div className="patient-details-grid">
          <div className="detail-item">
            <div className="detail-icon">
              <img src="/calendar_toda.svg" alt="Temperature" className="nav-icon" />
            </div>
            <div>
              <div className="detail-label body-regular-14">Date Of Birth</div>
              <div className="detail-value body-emphasized-14pt">{formatDate(patient?.date_of_birth || "")}</div>
            </div>
          </div>

          <div className="detail-item">
            <img src={patient?.gender === "Female" ? "/FemaleIcon.svg" : "/MaleIcon.svg"} alt="Temperature" className="nav-icon" />
            <div>
              <div className="detail-label body-regular-14">Gender</div>
              <div className="detail-value body-emphasized-14pt">{patient?.gender}</div>
            </div>
          </div>

          <div className="detail-item">
            <img src="/PhoneIcon.svg" alt="Temperature" className="detail-icon" />
            <div>
              <div className="detail-label body-regular-14">Contact Info</div>
              <div className="detail-value body-emphasized-14pt">{patient?.phone_number}</div>
            </div>
          </div>

          <div className="detail-item">
            <img src="/PhoneIcon.svg" alt="Temperature" className="detail-icon" />
            <div>
              <div className="detail-label body-regular-14">Emergency Contacts</div>
              <div className="detail-value body-emphasized-14pt">{patient?.emergency_contact}</div>
            </div>
          </div>

          <div className="detail-item">
            <img src="/InsuranceIcon.svg" alt="Temperature" className="detail-icon" />
            <div>
              <div className="detail-label body-regular-14">Insurance Provider</div>
              <div className="detail-value body-emphasized-14pt">{patient?.insurance_type}</div>
            </div>
          </div>
        </div>

        <button className="show-all-btn">Show All Information</button>
      </div>

      <div className="lab-results-card">
        <h2 className="card-title-24pt">Lab Results</h2>
        <div className="lab-results-list">
          {patient?.lab_results?.map((result:any, index) => (
            <div key={index} className="lab-result-item">
              <span className="body-regular-14">{result}</span>
              <button className="download-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2V14M10 14L6 10M10 14L14 10M4 16H16"
                    stroke="#072635"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
