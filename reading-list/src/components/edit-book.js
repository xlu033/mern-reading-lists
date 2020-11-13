import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditBook extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeAuthor = this.onChangeAuthor.bind(this);
      this.onChangeLanguage = this.onChangeLanguage.bind(this);
      this.onChangeDuration = this.onChangeDuration.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username: '',
        title: '',
        description: '',
        author: '',
        language: '',
        duration: 0,
        date: new Date(),
        users: []
      }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/books/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: this.state.username,
          title: this.state.title,
          description: this.state.description,
          author: this.state.author,
          language: this.state.language,
          duration: this.state.duration,
          date: new Date(response.data.date)
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data.map(user => user.username) });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const book = {
      username: this.state.username,
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
      language: this.state.language,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(book);

    axios.post('http://localhost:5000/books/update/'+this.props.match.params.id, exercise)
      .then(res => console.log(res.data));
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Reading Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>

          <div className="form-group"> 
              <label>Book title: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  />
            </div>

            <div className="form-group"> 
              <label>Description: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  />
            </div>

            <div className="form-group"> 
              <label>Author: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.author}
                  onChange={this.onChangeAuthor}
                  />
            </div>

            <div className="form-group"> 
              <label>Language: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.language}
                  onChange={this.onChangeLanguage}
                  />
            </div>

            <div className="form-group">
              <label>Duration: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.duration}
                  onChange={this.onChangeDuration}
                  />
            </div>

            <div className="form-group">
              <label>Date: </label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
            </div>


          <div className="form-group">
            <input type="submit" value="Edit Reading Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}