// import React, { HOOKS HERE } from "react";

function Quotable() {
  // Hint 1: Initialize state to store quote data. Consider what initial value should be.

  function updateQuote() {
    // Hint 2: Make a fetch request to the quotable API and update the state with the fetched quote.
    // Remember to convert the response with .json() and use setData to update your quote data.
    fetch("https://api.quotable.io/random")
    /// Hint 3: Convert the fetched response to JSON.
      
    // Hint 4: Update the component's state with the fetched quote data.
    // Use setData here to update your state with the new quote
  }

  // Hint 5: Use the useEffect hook to call updateQuote when the component mounts.
  // Remember, the dependency array should be empty to run only once at mount.
  useEffect(() => {
    // Hint 6: Call the 'updateQuote' function here to fetch a new quote when the component mounts
    // Your code here to call 'updateQuote' on component mount
  }, []);

  return (
    <div className="App flex justify-center items-center h-screen">
      {data ? ( // Check if data is not null
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden p-5">
          {/* Hint 7: Display the quote content here. How can you access it from your state? */}
          <p className="text-lg font-semibold">{/* INSERT_QUOTE_CONTENT_HERE */}</p>
          {/* Hint 8: Conditionally render the author if it exists */}
          {data.author && (
            <p className="text-md mt-4 p-4 font-light text-right">— {/* INSERT_AUTHOR_HERE */}</p>
          )}
          <div className="flex justify-center mt-4">
            {/* Hint 9: Attach the updateQuote function to the onClick event of the button */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded"
              onClick={/* INSERT_ONCLICK_HANDLER_HERE */}
            >
              New Quote
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  
}
export default Quotable;
