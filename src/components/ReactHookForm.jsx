import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					name="firstName"
					ref={register({ required: "First Name is required" })}
				/>
				{errors.firstName && <p>{errors.firstName.message}</p>}

				<input type="submit" />
			</form>
		</div>
	);
};

export default ReactHookForm;
