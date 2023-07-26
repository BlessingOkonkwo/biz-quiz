import React, { useState } from 'react';
import useAxios from '../hooks/useAxios';
import photoquiz from '../images/photo-quiz.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setCategory, setDifficulty, setAmount, setType } from '../redux/features/questionSlice';


const Home = () => {
  // const [cat, setCat] = useState("");
  // const [difficulty, setDifficulty] = useState("");
  // const [number, setNumber] = useState(1);
  // const [type, setType] = useState("");
  const navigate = useNavigate();

  const { 
    question_category,
    question_difficulty,
    question_type,
    amount_of_questions
  } = useSelector((state) => state.question);

  const dispatch = useDispatch();

  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  console.log(response);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/start_quiz');
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
              value={question_category}
              placeholder='Any Category'
              // onChange={(e) => setCat(e.target.value)}
              onChange={(e) => dispatch(setCategory(e.target.value))}
              className='border rounded-md p-2 w-full'
            >
              <option value="" disabled selected hidden>Any Category</option>
              {
                response && 
                response.trivia_categories.map((res, i) => (
                  <option key={i} value={res.id}>{res.name}</option>
                ))
              }
            </select>
          </div>

          <div>
            <label htmlFor="difficulty" className='block text-sm text-[#767268] my-2 md:text-center'>Select difficuty:</label>
            <select 
              id="difficulty" 
              name="difficulty"
              value={question_difficulty}
              className='border rounded-md p-2 w-full'
              onChange={(e) => dispatch(setDifficulty(e.target.value))}
            >
                <option value="" disabled selected hidden>Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
          </div>

          <div>
            <label htmlFor="type" className='block text-sm text-[#767268] my-2 md:text-center'>Select type:</label>
            <select 
              id="type" 
              name="type"
              value={question_type}
              className='border rounded-md p-2 w-full'
              onChange={(e) => dispatch(setType(e.target.value))}
            >
                <option value="" disabled selected hidden>Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True/False</option>
            </select>
          </div>

          <div>
            <label htmlFor="categories" className='block text-sm text-[#767268] my-2 md:text-center'>Number of Questions:</label>
            <input 
              type="number" 
              value={amount_of_questions}
              min="1" 
              max="10" 
              className='border rounded-md p-2 w-full'
              onChange={(e) => dispatch(setAmount(e.target.value))}
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
