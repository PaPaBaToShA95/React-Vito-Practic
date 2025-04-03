import { useState, useEffect } from "react";


function App() {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    if (!selectedCharacter || selectedCharacter === "none") return;

    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/${selectedCharacter}`);
        const data = await response.json();
        setCharacterData(data); 
      } catch (error) {
        console.error("Помилка при завантаженні даних:", error);
      }
    };

    fetchCharacter();
  }, [selectedCharacter]); 

  return (
    <div className="flex flex-col items-center p-4">
      <select
        className="bg-slate-600 text-white w-auto rounded-[15px] p-2"
        onChange={(e) => setSelectedCharacter(e.target.value)}
      >
        <option value="none">Choose your character</option>
        <option value="people/1/">Luke Skywalker</option>
        <option value="people/2/">C-3PO</option>
        <option value="people/3/">R2-D2</option>
        <option value="people/4/">Darth Vader</option>
        <option value="people/5/">Leia Organa</option>
        <option value="people/6/">Owen Lars</option>
        <option value="people/7/">Beru Whitesun lars</option>
        <option value="people/8/">R5-D4</option>
        <option value="people/9/">Biggs Darklighter</option>
        <option value="people/10/">Obi-Wan Kenobi</option>
        <option value="people/11/">Anakin Skywalker</option>
        <option value="people/12/">Wilhuff Tarkin</option>
        <option value="people/13/">Chewbacca</option>
      </select>

      {characterData && (
          <div className="mt-4 p-4 bg-gray-800 text-white rounded-[15px] border border-white shadow-lg w-80">
          <h2 className="text-xl font-bold">{characterData.name}</h2>
          <p>Height: {characterData.height} cm</p>
          <p>Mass: {characterData.mass} kg</p>
          <p>Hair color: {characterData.hair_color}</p>
          <p>Skin color: {characterData.skin_color}</p>
          <p>Eye color: {characterData.eye_color}</p>
          <p>Birth year: {characterData.birth_year}</p>
          <p>Gender: {characterData.gender}</p>
          </div> 
      )}
    </div>
  );
}

export default App;
