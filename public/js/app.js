console.log("Team Bravo - REACT Part");

class App extends React.Component {
    state = {
        date: "",
        title: "",
        entry: "",
        url: "",
    }

    render = () => {
        return <div className="blog-container">
            <h1>Hello</h1>
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("main"),
)