import React from "react";

const Search = props =>

    <div className="panel-body">
      <form>
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input onChange={props.handleTopicChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
        </div>

        <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>
      <br/>
    </div>
        




export default Search;
