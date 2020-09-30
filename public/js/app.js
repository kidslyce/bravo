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

class App extends React.Component {
    state = {
        date: "",
        title: "",
        entry: "",
        url: "",
        blogs: [],
    }

    handleChange = event => {
        // event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
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
                    <input type="text" id="name" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="species">Tittle</label>
                    <input type="text" id="species" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="entry">Entry</label>
                    <input type="text" id="entry" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="url">URL</label>
                    <input type="text" id="url" onChange={this.handleChange} />
                    <br />
                    <input type="submit" value="Add" />
                </form>
            </div>
            <div className="all-blogs-container">
                <ul>
                    {this.state.blogs.map((blog) => {
                        return (
                            <li key={blog._id}>
                                <h4>{blog.date}</h4>
                                <br />
                                <h2>({blog.title})</h2> <br />
                                <p className="entry">{blog.entry}</p>
                                <a href={blog.url}>Link for more...</a>
                                <button
                                    value={blog._id}
                                    onClick={this.deleteblog}>Delete</button>
                                {/* <details>
                                    <summary>Edit this blog</summary>
                                    <form id={blog._id} onSubmit={this.updateblog}>
                                        <label htmlFor="name">Name</label>
                                        <br />
                                        <input
                                            type="text"
                                            id="name"
                                            onChange={this.handleChange}
                                            defaultValue={blog.name}
                                        // placeholder={blog.name}
                                        />
                                        <br />
                                        <label htmlFor="image">Image</label>
                                        <br />
                                        <input
                                            type="text"
                                            id="image"
                                            onChange={this.handleChange}
                                            defaultValue={blog.image}
                                        // placeholder={blog.image}
                                        />
                                        <br />
                                        <label htmlFor="species">Species</label>
                                        <br />
                                        <input
                                            type="text"
                                            id="species"
                                            onChange={this.handleChange}
                                            defaultValue={blog.species}
                                        />
                                        {
                                            blog.reservedForAdoption ?
                                                <h4>Reserved for adoption</h4> :
                                                <button
                                                    onClick={this.reserveIt}
                                                >Reserve</button>
                                        }
                                        <input type="submit" value="Update blog" />
                                    </form>
                                </details> */}
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