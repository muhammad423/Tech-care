import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          {/* <svg width="42" height="48" viewBox="0 0 42 48" fill="none">
            <path d="M21 0L0 12V36L21 48L42 36V12L21 0Z" fill="#01F0D0" />
            <path d="M21 10L10 16V32L21 38L32 32V16L21 10Z" fill="#072635" />
          </svg>
          <span className="logo-text">Tech.Care</span> */}
           <img src="/TestLogo.svg" alt="Temperature" className="logo-text" />
        </div>
        <nav className="nav">
          <a href="#" className="nav-item">
          <img src="/home.svg" alt="Temperature" className="nav-icon" />
            Overview
          </a>
          <a href="#" className="nav-item active">
          <img src="/group_FILL04.svg" alt="Temperature" className="nav-icon" />
            Patients
          </a>
          <a href="#" className="nav-item">
          <img src="/calendar_toda.svg" alt="Temperature" className="nav-icon" />
            Schedule
          </a>
          <a href="#" className="nav-item">
          <img src="/Message.svg" alt="Temperature" className="nav-icon" />
            Message
          </a>
          <a href="#" className="nav-item">
          <img src="/credit_card.svg" alt="Temperature" className="nav-icon" />
            Transactions
          </a>
        </nav>
        <div className="header-user">
          <img src="/senior-woman-doctor.png" alt="Dr. Jose Simmons" className="user-avatar" />
          <div className="user-info">
            <div className="user-name body-emphasized-14pt">Dr. Jose Simmons</div>
            <div className="user-role body-secondary-info-14pt">General Practitioner</div>
          </div>
           <span className="inline-block h-[10px] w-[2px] bg-gray-300"></span>
           <div className="btn">
            <button className="settings-btn">⚙️</button>
          <button className="menu-btn">⋮</button>
           </div>
        </div>
      </div>
    </header>
  )
}
