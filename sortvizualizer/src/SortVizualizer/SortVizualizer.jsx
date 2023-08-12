import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortVizualizer.css'; // Corrected import path

const ANIMATION_SPEED_MS = 5;
const NUMBER_OF_ARRAY_BARS = 210;

export class SortVizualizer extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            array: [],
        };
    }
    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(7, 630));
        }
        this.setState({ array });
    }


    MergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'green';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    HeapSort() {

    }
    QuickSort() {

    }
    BubbleSort() {

    }


    render() {
        const { array } = this.state;
        return (
        <div className="array-container">
            {
                array.map((value, idx) => (
                    <div className="array-bar"
                        key={idx}
                        style={{ height: `${value}px` }}
                    >
                    </div>
                ))
            }
            
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.MergeSort()}>Merge Sort</button>
            {/* <button onClick={()=>this.HeapSort()}>Heap Sort</button> */}
            {/* <button onClick={()=>this.QuickSort()}>Quick Sort</button> */}
            {/* <button onClick={()=>this.BubbleSort()}>Bubble Sort</button> */}
        </div>);
    }

}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export default SortVizualizer;
