import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styles from './MyInfo.module.css'

const USER_DATA = 'userData'

const MyInfo = () => {
	const { register, handleSubmit, setValue } = useForm()

	useEffect(() => {
		try {
			const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {}
			setValue('name', userData.name)
			setValue('age', userData.age)
			setValue('email', userData.email)
		} catch (error) {
			console.error(error)
		}
	}, [])

	const handleFormSubmit = (data) => {
		localStorage.setItem(USER_DATA, JSON.stringify(data))
		try {
			const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {}
			alert('Data saved successfully')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className={styles.myInfoWrapper}>
			<form
				onSubmit={handleSubmit(handleFormSubmit)}
				className={styles.myInfoForm}
			>
				<label>
					<span>Name:</span>
					<input
						type="text"
						name="name"
						placeholder="Name"
						{...register('name', {
							required: true,
							minLength: 3,
							maxLength: 120
						})}
					/>
				</label>
				<label>
					<span>Age:</span>
					<input
						type="number"
						name="age"
						placeholder="Age"
						{...register('age', {
							required: true,
							min: 1,
							max: 100,
							valueAsNumber: true
						})}
					/>
				</label>
				<label>
					<span>Email:</span>
					<input
						type="email"
						name="email"
						placeholder="Email Address"
						{...register('email', {
							required: true,
							minLength: 3,
							maxLength: 120
						})}
					/>
				</label>
				<button type="submit">Save</button>
			</form>
		</div>
	)
}

export default MyInfo
