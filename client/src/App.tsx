import "./App.css"
import UserInputPositiveSection from "./components/UserInputPositiveSection/UserInputPositiveSection";

function App() {
    return (
        <div className="page">
            <h1>Mood Mesh</h1>
            <div className="page__content">
                <UserInputPositiveSection />
                <UserInputPositiveSection />
            </div>
        </div>
    )
}

export default App;
