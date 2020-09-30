console.log("Team Bravo - REACT Part");


class Nav extends React.Component {

    render = () => {
        return <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand home-nav" href="#">HOME</a>
        </nav>
    }
}

class Header extends React.Component {

    render = () => {
        return <header>
            <div className="blog-title">Team Bravo Blog!</div>
        </header>
    }
}

class App extends React.Component {
    state = {
        date: "",
        title: "",
        entry: "",
        url: "",
        blogs: [],
    }
    componentDidMount = () => {
        axios.get("/blogs").then(
            (response) => {
                this.setState({
                    blogs: response.data,
                })
            }
        )
    }

    updateblog = (event) => {
        event.preventDefault();
        const id = event.target.id;

        axios.put("/blogs/" + id, this.state).then(
            (response) => {
                this.setState({
                    blogs: response.data,
                })
            }
        )
    }

    deleteBlog = (event) => {
        axios.delete("/blogs/" + event.target.value).then(
            (response) => {
                this.setState({
                    blogs: response.data,
                })
            }
        )
    }

    handleChange = event => {
        // event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value
        })
    }


    submitForm = (event) => {
        event.preventDefault();
        event.currentTarget.reset();
        console.log(this.state);
        event.preventDefault();
        axios.post("/blogs", this.state).then(
            (response) => {
                this.setState({
                    blogs: response.data,
                })
            }
        )
    }

    render = () => {
        return <div className="blog-container">
            <Nav />
            <Header />
            <div className="form-container">
                <form onSubmit={this.submitForm}>
                    <label htmlFor="name">Date</label>
                    <input type="date" id="name" onChange={this.handleChange} className="form-control" />
                    <br />
                    <label htmlFor="species">Title</label>
                    <input type="text" id="species" onChange={this.handleChange} className="form-control" />
                    <br />
                    <label htmlFor="entry">Entry</label>
                    <input type="text" id="entry" onChange={this.handleChange} className="form-control" />
                    <br />
                    <label htmlFor="url">URL</label>
                    <input type="text" id="url" onChange={this.handleChange} className="form-control" />
                    <br />
                    <input type="submit" value="Add" className="btn btn-outline-dark" />
                </form>
            </div>
            <div className="all-blogs-container">
                <ul>
                    {this.state.blogs.map((blog) => {
                        return (
                            <li className="card" key={blog._id}>
                                <h6>Date: {blog.date}</h6>
                                <br />
                                <h2>Title: {blog.title}</h2> <br />
                                <p className="entry">{blog.entry}</p>
                                <a href={blog.url}>Link for more...</a>
                                <button
                                    value={blog._id}
                                    onClick={this.deleteBlog}
                                    className="btn btn-outline-dark">Delete</button>
                                <details>
                                    <summary>Edit this blog</summary>
                                    <form id={blog._id} onSubmit={this.updateblog}>
                                        <label htmlFor="date">Date</label>
                                        <br />
                                        <input
                                            type="date"
                                            id="date"
                                            onChange={this.handleChange}
                                            defaultValue={blog.date}
                                            className="form-control"
                                        />
                                        <br />
                                        <label htmlFor="title">Title</label>
                                        <br />
                                        <input
                                            type="text"
                                            id="title"
                                            onChange={this.handleChange}
                                            defaultValue={blog.title}
                                            className="form-control"
                                        />
                                        <br />
                                        <label htmlFor="entry">Entry</label>
                                        <br />
                                        <input
                                            type="text"
                                            id="entry"
                                            onChange={this.handleChange}
                                            defaultValue={blog.entry}
                                            className="form-control"
                                        />
                                        <label htmlFor="url">URL</label>
                                        <br />
                                        <input
                                            type="text"
                                            id="url"
                                            onChange={this.handleChange}
                                            defaultValue={blog.url}
                                            className="form-control" />
                                        <input type="submit" value="Update blog" className="btn btn-outline-dark"
                                            className="form-control update-blog" />
                                    </form>
                                </details>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("main"),
)