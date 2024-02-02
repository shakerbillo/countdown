import { useRef, useState } from 'react';

const Player = () => {
	const [enteredName, setEnteredName] = useState(null);

	const nameInput = useRef();

	const handleClick = () => {
		setEnteredName(nameInput.current.value);
    nameInput.current.value = '';
	};
	return (
		<>
			<section id='player'>
				<h2>Welcome {enteredName ?? 'unknown entity'}</h2>
				<p>
					<input ref={nameInput} type='text' />
					<button onClick={handleClick}>Set Name</button>
				</p>
			</section>
		</>
	);
};
export default Player;
