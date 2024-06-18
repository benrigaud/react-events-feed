import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

const SignupForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm()

	const handleClearButton = () => {
		reset()
	}

	const handleFormSubmit = (data) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					{...register('name', { required: true })}
				/>
			</label>
			<br />
			<label>
				Age:
				<input
					type="number"
					name="age"
					{...register('age', { required: true })}
				/>
			</label>
			<br />
			<label>
				Address:
				<input
					type="text"
					name="address"
					{...register('address', { required: true })}
				/>
			</label>
			<br />
			<label>
				Zipcode
				<input
					type="number"
					name="zipcode"
					{...register('zipcode', { required: true })}
				/>
			</label>
			<br />
			<label>
				Phone:
				<input
					type="number"
					name="phone"
					{...register('phone', { required: true })}
				/>
			</label>
			<div>
				<button type="button" onClick={handleClearButton}>
					Clear
				</button>
				<button type="submit">Submit</button>
			</div>
		</form>
	)
}

SignupForm.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	address: PropTypes.string,
	zipcode: PropTypes.number,
	phone: PropTypes.number
}

export default SignupForm
