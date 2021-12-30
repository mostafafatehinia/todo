import "./style.css";
export const Form = () => {
	return (
		<div className='form-wrapper'>
			<div className='form-card'>
				<input type='text' className='form-input' placeholder='Add ToDo' />
				<button className='add-button active:scale-75'>Add</button>
			</div>
		</div>
	);
};
