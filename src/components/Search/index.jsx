import './index.scss';
const Search = (props) => {

    const runValidations = (val) => {
        //for now we are ensuring that blanks are not allowed and minimum 3 charactes are needed
        if (!val || val.trim().length < 3) {
            alert("Please enter at least 3 charactes");
            return false;
        } else {
            return true;
        }
    }
    const handleEnterPressed = (event) => {
        if (event) {
            event.stopPropagation();
            let keycode = event.charCode ? event.charCode : event.which;
            if (keycode === 13) {
                let value = event.target.value;
                if (runValidations(value)) {
                    props.onSearch(event.target.value);
                    event.target.value = "";
                }
            }
        }
    }
    return (
        <div className="in-app-search">
            <input type="text" placeholder="Enter your friend's name" onKeyPress={(e) => { handleEnterPressed(e) }} />
        </div>
    )
}
export default Search;