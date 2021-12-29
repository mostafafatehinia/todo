export const Task = () => {
	return (
		<div className='flex justify-center last:mb-10'>
			<div className='bg-white h-fit w-2/3 md:w-1/2 text-center mt-10 rounded-2xl shadow-lg p-10 hover:shadow-2xl transition duration-500'>
				<div title='creation time' className='text-gray-400 flex justify-center items-center pr-2 mb-4'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 mr-2'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
					<p className='text-xs uppercase'>2020/2/1 12:20 am</p>
				</div>
				<p className='mb-8 text-gray-600 text-ellipsis overflow-hidden font-medium h-12'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quis aliquam mollitia assumenda atque
					est commodi, corporis deleniti reprehenderit harum.
				</p>
				<div className='flex justify-around relative'>
					<div title='to do' className='text-blue-400 pr-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 cursor-pointer'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
					</div>
					<div title='doing' className='text-blue-700 pr-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 cursor-pointer'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
					</div>
					<div title='done' className='text-green-500 pr-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 cursor-pointer hover:animate-bounce'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
							/>
						</svg>
					</div>
					<div title='delete'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 text-red-400 cursor-pointer hover:animate-spin'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};
