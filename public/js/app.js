console.log("Team Bravo - REACT Part");


class Nav extends React.Component {

    render = () => {
        return <nav>
            <div className="home-nav">Home</div>
        </nav>
    }
}

class Header extends React.Component {

    render = () => {
        return <header>
            <div className="bloc-pic">Blog Picture Here</div>
            <div className="blog-title"> Here we have title</div>
        </header>
    }
}
class FormPost extends React.Component {

    render = () => {
        return <div className="all-blogs-container">

        </div>
    }
}



class App extends React.Component {
    state = {
        date: "",
        title: "",
        entry: "",
        url: "",
    }

    render = () => {
        return <div className="blog-container">
            <Nav />
            <Header />
            <div className="form-container">
                <form onSubmit={this.props.submitForm}>
                    <label htmlFor="name">Date</label>
                    <input type="text" id="name" onChange={this.props.handleChange} />
                    <br />
                    <label htmlFor="species">Tittle</label>
                    <input type="text" id="species" onChange={this.props.handleChange} />
                    <br />
                    <label htmlFor="entry">Entry</label>
                    <input type="text" id="entry" onChange={this.props.handleChange} />
                    <br />
                    <label htmlFor="url">URL</label>
                    <input type="text" id="url" onChange={this.props.handleChange} />
                    <br />
                    <input type="submit" value="Add" />
                </form>
            </div>

            <FormPost />
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("main"),
)