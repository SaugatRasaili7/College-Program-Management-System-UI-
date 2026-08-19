import React from "react";
import "./App.css";

function App() {
  const events = [
    {
      name: "Football Tournament",
      date: "25 Aug 2026",
      venue: "College Ground",
      status: "Upcoming",
    },
    {
      name: "Singing Competition",
      date: "27 Aug 2026",
      venue: "College Hall",
      status: "Upcoming",
    },
    {
      name: "Quiz Competition",
      date: "30 Aug 2026",
      venue: "Room 204",
      status: "Upcoming",
    },
  ];

  const participants = [
    {
      name: "Saugat Rasaili",
      id: "CMP-001",
      event: "Football Tournament",
    },
    {
      name: "Nabin Sharma",
      id: "CMP-002",
      event: "Singing Competition",
    },
    {
      name: "Aayush Thapa",
      id: "CMP-003",
      event: "Quiz Competition",
    },
    {
      name: "Prabin Gurung",
      id: "CMP-004",
      event: "Football Tournament",
    },
  ];

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">C</div>
          <div>
            <h2>CPSM</h2>
            <span>College Management</span>
          </div>
        </div>

        <nav className="navigation">
          <p className="menu-title">MAIN MENU</p>

          <a href="#" className="nav-item active">
            <span>📊</span>
            Dashboard
          </a>

          <a href="#" className="nav-item">
            <span>📅</span>
            Events
          </a>

          <a href="#" className="nav-item">
            <span>👥</span>
            Participants
          </a>

          <a href="#" className="nav-item">
            <span>🏆</span>
            Results
          </a>

          <a href="#" className="nav-item">
            <span>🥇</span>
            Scoreboard
          </a>

          <a href="#" className="nav-item">
            <span>📄</span>
            Reports
          </a>

          <p className="menu-title">SYSTEM</p>

          <a href="#" className="nav-item">
            <span>⚙️</span>
            Settings
          </a>

          <a href="#" className="nav-item">
            <span>❓</span>
            Help
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="user-mini">
            <div className="avatar">S</div>
            <div>
              <strong>Saugat Rasaili</strong>
              <small>Administrator</small>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Header */}
        <header className="header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's what's happening today.</p>
          </div>

          <div className="header-actions">
            <button className="notification">🔔</button>

            <div className="profile">
              <div className="avatar">S</div>
              <div>
                <strong>Saugat</strong>
                <small>Administrator</small>
              </div>
            </div>
          </div>
        </header>

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon blue">📅</div>
            <div>
              <p>Total Events</p>
              <h2>12</h2>
              <span className="positive">↑ 8.2%</span>
              <small> from last month</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">👥</div>
            <div>
              <p>Participants</p>
              <h2>156</h2>
              <span className="positive">↑ 12.5%</span>
              <small> from last month</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">🏆</div>
            <div>
              <p>Completed Events</p>
              <h2>8</h2>
              <span className="positive">↑ 4.3%</span>
              <small> from last month</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">🏅</div>
            <div>
              <p>Total Results</p>
              <h2>42</h2>
              <span className="positive">↑ 6.7%</span>
              <small> from last month</small>
            </div>
          </div>

        </section>

        {/* Content Grid */}
        <section className="content-grid">

          {/* Upcoming Events */}
          <div className="card events-card">

            <div className="card-header">
              <div>
                <h2>Upcoming Events</h2>
                <p>Recently scheduled college programs</p>
              </div>

              <button className="view-button">
                View All →
              </button>
            </div>

            <div className="event-list">

              {events.map((event, index) => (
                <div className="event-item" key={index}>

                  <div className="event-date">
                    <strong>{event.date.split(" ")[0]}</strong>
                    <span>{event.date.split(" ")[1]}</span>
                  </div>

                  <div className="event-info">
                    <h3>{event.name}</h3>
                    <p>📍 {event.venue}</p>
                  </div>

                  <span className="status">
                    {event.status}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* Quick Actions */}
          <div className="card quick-card">

            <div className="card-header">
              <div>
                <h2>Quick Actions</h2>
                <p>Frequently used actions</p>
              </div>
            </div>

            <div className="quick-actions">

              <button>
                <span className="quick-icon blue">＋</span>
                <div>
                  <strong>Add Event</strong>
                  <small>Create a new college event</small>
                </div>
              </button>

              <button>
                <span className="quick-icon purple">👤</span>
                <div>
                  <strong>Register Participant</strong>
                  <small>Register a student</small>
                </div>
              </button>

              <button>
                <span className="quick-icon orange">🏆</span>
                <div>
                  <strong>Add Result</strong>
                  <small>Enter event results</small>
                </div>
              </button>

              <button>
                <span className="quick-icon green">📄</span>
                <div>
                  <strong>Generate Report</strong>
                  <small>Create event report</small>
                </div>
              </button>

            </div>

          </div>

        </section>

        {/* Participants */}
        <section className="card participants-card">

          <div className="card-header">
            <div>
              <h2>Recent Participants</h2>
              <p>Recently registered participants</p>
            </div>

            <button className="view-button">
              View All →
            </button>
          </div>

          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>Participant</th>
                  <th>Student ID</th>
                  <th>Event</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {participants.map((participant, index) => (
                  <tr key={index}>

                    <td>
                      <div className="participant">
                        <div className="participant-avatar">
                          {participant.name.charAt(0)}
                        </div>

                        <strong>{participant.name}</strong>
                      </div>
                    </td>

                    <td>{participant.id}</td>

                    <td>{participant.event}</td>

                    <td>
                      <span className="registered">
                        Registered
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </section>

        {/* Footer */}
        <footer>
          <p>
            © 2026 College Program Management System
          </p>

          <p>
            Developed by <strong>Saugat Rasaili</strong>
          </p>
        </footer>

      </main>

    </div>
  );
}

export default App;


