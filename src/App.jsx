import EventList from "./components/events/event-list/EventList"

function App() {
  return (
    <div className="container py-5">
      <div className="d-flex flex-column gap-2">
        <h1 className="fw-lighter align-self-center">Find out what's on</h1>
        <EventList />
      </div>
    </div>
  )
}

export default App
