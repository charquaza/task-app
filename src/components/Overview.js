//accept task list props from App.js
//update the DOM list

function Overview(props) {
    var listJSX = props.items.map(function toJSX(item, index) {
        return (
            <div key={index}>
                {item}
            </div>
        );
    });

    return (
        <div>
            {listJSX}
        </div>
    );
}

export default Overview;