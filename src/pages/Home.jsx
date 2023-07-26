import React from 'react';
import useAxios from '../hooks/useAxios';
import photoquiz from '../images/photo-quiz.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setCategory, setDifficulty, setAmount, setType } from '../redux/features/questionSlice';


const Home = () => {
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

  if (loading) {
    return (
      <div role="status" className="flex flex-col h-[300px] items-center justify-center">
        <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    )
  };

  if (error) {
    return (
      <div className="text-red-500 font-[40px] flex flex-col h-[300px] items-center justify-center">
        <div>AN ERROR OCCURED!</div>
      </div>
    )
  }

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
