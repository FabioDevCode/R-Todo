import React from "react";
import './List.css';


function addToList(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    const myList = document.querySelector('.List');

    console.log(input.value);
    console.log(myList);

};

const List = () => {
    return <React.Fragment>
        <main>
			<form className="Bloc-input">
				<input className='input' type="text" />
				<button className='button' onClick={addToList}> ADD </button>
			</form>

            <ul className="List">
                <li>1 TEST TEST</li>
                <li>TEST 2 TEST</li>
                <li>TEST TEST 3</li>
            </ul>
		</main>

    </React.Fragment>
}

export default List;