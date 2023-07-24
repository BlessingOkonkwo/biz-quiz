import React, { useState } from 'react';
import useAxios from '../hooks/useAxios';
import photoquiz from '../images/photo-quiz.jpg';


const Home = () => {
  const [cat, setCat] = useState("");
  const [level, setLevel] = useState("");
  const [number, setNumber] = useState(1);

  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  console.log(response);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("retrieving questions");
  };

  return (
    <div className='flex justify-between flex-col p-10 font-[Poppins]'>
      <div className="w-[] border-2 rounded-3xl">
        <img src={photoquiz} alt="quiz pic" className='rounded-3xl md:h-[300px] w-full h-1/2' />
      </div>

      <div className='border-2 rounded-3xl p-6 '>
        <form onSubmit={handleSubmit} className='rounded-3xl flex flex-col md:flex-row gap-4 md:items-center justfiy-center md:justify-between'>
          <div>
            <label htmlFor="categories" className='block text-sm text-[#767268] my-2 md:text-center'>Choose a category:</label>
            <select 
              id="categories" 
              name="category"
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className='border rounded-md p-2 w-full'
            >
              <option value="any category">Any Category</option>
              {
                response && 
                response.trivia_categories.map((res, i) => (
                  <option key={i} value={res.name}>{res.name}</option>
                ))
              }
            </select>
          </div>

          <div>
            <label htmlFor="difficulty" className='block text-sm text-[#767268] my-2 md:text-center'>Select difficuty:</label>
            <select 
              id="difficulty" 
              name="difficulty"
              value={level}
              className='border rounded-md p-2 w-full'
              onChange={(e) => setLevel(e.target.value)}
            >
                <option value="any difficulty">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
          </div>

          <div>
            <label htmlFor="categories" className='block text-sm text-[#767268] my-2 md:text-center'>Number of Questions:</label>
            <input 
              type="number" 
              value={number}
              min="1" 
              max="10" 
              className='border rounded-md p-2 w-full'
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          


          <div className="text-right">
            <input 
              type="submit" 
              value="Start Quiz &rarr;" 
              className='cursor-pointer border rounded-lg p-4 hover:bg-gray-100 outline-none active:bg-white'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
