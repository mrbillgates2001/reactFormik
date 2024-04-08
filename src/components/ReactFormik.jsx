import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ReactFormik = () => {
	const validationSchema = Yup.object({
		name: Yup.string().required("Name is required"),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
	});

	return (
		<React.Fragment>
			<div>
				<Formik
					initialValues={{ name: "", email: "" }}
					validationSchema={validationSchema}
					onSubmit={(values) => {
						alert("Your information submitted!");
					}}>
					<Form
						style={{
							display: "flex",
							flexDirection: "column",
							width: "500px",
							margin: "200px auto",
							padding: "20px",
							border: "1px solid #ccc",
							borderRadius: "5px",
						}}>
						<h1
							style={{
								textAlign: "center",
								margin: "20px 0 0 0",
								color: "#000000",
								fontSize: "30px",
								fontWeight: "bold",
								marginBottom: "40px",
							}}>
							Formik Form
						</h1>
						<Field
							style={{
								padding: "10px",
								border: "1px solid #ccc",
								borderRadius: "5px",
								marginBottom: "20px",
							}}
							type="text"
							name="name"
							placeholder="Name"
						/>
						<ErrorMessage
							style={{
								color: "red",
								fontSize: "12px",
								marginBottom: "20px",
							}}
							name="name"
							component="div"
						/>

						<Field
							style={{
								padding: "10px",
								border: "1px solid #ccc",
								borderRadius: "5px",
								marginBottom: "20px",
							}}
							type="email"
							name="email"
							placeholder="Email"
						/>
						<ErrorMessage
							style={{
								color: "red",
								fontSize: "12px",
								marginBottom: "20px",
							}}
							name="email"
							component="div"
						/>

						<button className="btn btn-primary" type="submit">
							Submit
						</button>
					</Form>
				</Formik>
			</div>
		</React.Fragment>
	);
};

export default ReactFormik;
