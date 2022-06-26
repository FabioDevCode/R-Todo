import React from "react";
import './List.css';

// const input = document.querySelector('.input');
// const btn = document.querySelector('button');
// let myList = [];



function List() {
    return <>
        <main>
			<div className="Bloc-input">
				<input className='input' type="text" />
				<button className='button'> ADD </button>
			</div>

            <ul>
                <li> TEST 1</li>
                <li> TEST 2</li>
            </ul>
		</main>

    </>
}

export default List;