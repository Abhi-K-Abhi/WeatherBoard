// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-indigo-400 flex items-center justify-center">
//       <h1 className="text-4xl font-bold text-white">🌦️ Weather Dashboard</h1>
//     </div>
//   );
// }

// export default App;

import SearchBar from "./components/searchBar";

function App() {
  const handleSearch = (city) => {
    console.log("Searching for:", city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-indigo-400 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-4">🌦️ Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;
