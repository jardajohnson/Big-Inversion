import React, { useState } from 'react';

const PersonCard = (props) => {
	const [age, setAge] = useState(props.age);

	const handleClick = () => {
		setAge(age + 1);
	};
	const { firstName, lastName, hairColor } = props;

	return (
		<div>
			<h1>
				{lastName}, {firstName}
			</h1>
			<p>Age: {age}</p>
			<p>Hair Color: {hairColor}</p>
			<button onClick={handleClick}>
				Birthday Button for {firstName} {lastName}
			</button>
		</div>
	);
};

export default PersonCard;
