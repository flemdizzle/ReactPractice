var data = [
  {first: "Bruce", last: "Wayne"},
  {first: "Peter", last: "Parker"},
  {first: "Clark", last: "Kent"}

];


var PersonApp = React.createClass({
  render: function(){
    return (
        <div>
          <h1>this is the app</h1>
          <PersonList data={this.props.data} />
        </div>
      )
  }
});
var Person = React.createClass({
  render: function(){
    return(
        <p>{this.props.first}, {this.props.last}</p>
      )
  }
})

var PersonList = React.createClass({
  render: function(){
    var people = this.props.data.map(function(person){
      return <Person first={person.first} last={person.last} />
    });

    return (
        <div>
          {people}
        </div>
      )
  }
})
React.render(<PersonApp data={data}/>, document.getElementById('content'));