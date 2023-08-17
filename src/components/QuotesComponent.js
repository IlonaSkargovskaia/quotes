import quotes from '../quotesdata.js';
import {useState, useEffect} from 'react';

const QuotesComponent = () => {
    const colorArray = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


    
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        

    const [quote, setQuote] = useState(quotes[0]);
    const [color, setColor] = useState(randomColor);
    const [isDropIn, setIsDropIn] = useState(true);


    useEffect(() => {
        const randomObj = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomObj);

        const color = randomColor;
        setColor(color);
        document.body.style.backgroundColor = color;

    }, [])

    const changeQuotes = () => {
        const randomObj = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomObj);

        const color = randomColor;
        setColor(color);
        document.body.style.backgroundColor = color;

        // Trigger the drop-in animation by toggling the 'isDropIn' state
        setIsDropIn(true);
    }

     // to handle the end of the drop-in animation
    const handleDropInEnd = () => {
        setIsDropIn(false);
    };


    return (
        <div className="quoteBlock ">
          <div className={`${isDropIn ? 'drop-in' : ''}`}
                style={{ color: color }}
                onAnimationEnd={handleDropInEnd}>

                <h1 >"{quote.quote}"</h1>
                <div style={{textAlign: 'right'}}>
                    <p><i>{(quote.author === '') ? '-- unknown --' : `-- ${quote.author} --`}</i></p>
                    <button onClick={changeQuotes} style={{backgroundColor: color}}>New Quote</button>
                </div>
          </div> 
        </div>
    )
}

export default QuotesComponent;