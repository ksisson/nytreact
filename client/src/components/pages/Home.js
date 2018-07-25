import React from "react";
// import {Link} from "react-router-dom";
import axios from "axios";

class Home extends React.Component {
  state = {
    search: "",
    results: []

  };


  handleInputChange = (event) => {
    // update any state property with the input value of the same name
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitSearch = (event) => {
    event.preventDefault();

    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=${this.state.search}`)
    .then((result) => {

        var response = result.data.response.docs 
       
        var newarray = []
        for (var i = 0; i < response.length; i++){
            if (response[i].byline.person[0].firstname !== undefined){
                newarray.push(response[i])
            }
            console.log(response[i].byline.person[0].firstname)
        }
        console.log(newarray)
        this.setState({
            results: newarray
        })
    })
}

saveArticle = () => {
    var article = {
        title: this.title,
        date: this.date,
        url: this.url,
        summary: this.summary
    }
    console.log(article)
    axios.post("/save", article).then(result =>{
    console.log(result);
    })
    

    
    
    };

  render() {
    return(
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="search">NYTSearch:</label>
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for a Topic"
                        id="search"
                    />
                    <br />
                    <button onClick={this.submitSearch} className="btn btn-primary">Search</button>
                </div>
            </form>
            <div className="searchNews">
            {this.state.results.map((item) => (
                <div>
                    <a href={item.web_url}>{item.web_url}</a>
                    <button 
                        url={item.web_url}
                        author={item.byline.person[0].firstname + " " + item.byline.person[0].lastname}
                        date={item.pub_date}
                        summary={item.snippet}
                        title={item.headline.main}
                        onClick={this.saveArticle}
                        >Save</button>
                </div>
            ))}
            </div>
        </div>
    )
  }
}

export default Home;