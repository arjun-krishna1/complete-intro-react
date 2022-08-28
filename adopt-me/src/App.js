
const Pet = (props) => {
    return (
        React.createElement("div", {}, [
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.animal),
            React.createElement("h2", {}, props.breed),
        ])
    )
}


// create a class component called App
// each time you call this will return div with h1
// reusable component
const App = () => {
    // createelement creates a new instance
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Don",
                animal: "Dog",
                breed: "Labrador",
            }),
            React.createElement(Pet, {
                name: "Tiana",
                animal: "Dog",
                breed: "German Shepard",
            }),
            React.createElement(Pet, {
                name: "Oliver",
                animal: "Cat",
                breed: "Unknown",
            }),
        ]
    );
};

// put instance of react in root
ReactDOM.render(React.createElement(App), document.getElementById("root"))
