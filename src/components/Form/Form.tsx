import "./formStyle.css";
export const Form = () => {
	return (
		<div className='flex justify-center mt-16'>
			<div className='bg-white h-40 w-2/3 md:w-1/2 text-center mt-10 rounded-2xl shadow'>
				<input
					type='text'
					className='border-4 bg-gray-50 rounded-xl w-1/2 text-center md:text-left h-12 mt-14 mr-5 pl-4'
					placeholder='Add ToDo'
				/>
				<button className='add-button active:scale-75'>Add</button>
			</div>
		</div>
	);
};
