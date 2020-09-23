import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';
//get unique values
const getUnique = (items, value) => {
	return [ ...new Set(items.map((item) => item[value])) ];
};
export default function RoomsFilter({ rooms }) {
	const context = useContext(RoomContext);

	const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;
	let types = getUnique(rooms, 'type');
	types = [ 'all', ...types ];
	//map to jsx
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});
	let people = getUnique(rooms, 'capacity');
	people = people.map((item, index) => {
		return (
			<option key={index} value={item}>
				{item}
			</option>
		);
	});
	return (
		<section className="filter-container">
			<Title title="search rooms" />
			{/* types */}
			<form className="filter-form">
				<div className="form-group">
					<label htmlFor="type">room type</label>
					<select className="form-control" name="type" id="type" value={type} onChange={handleChange}>
						{types}
					</select>
				</div>
				{/*end types */}
				{/* guest */}
				<div className="form-group">
					<label htmlFor="capacity">Guests</label>
					<select
						className="form-control"
						name="capacity"
						id="capacity"
						value={capacity}
						onChange={handleChange}
					>
						{people}
					</select>
				</div>
				{/* end guest */}
				{/* price */}
				<div className="form-group">
					<label htmlFor="price">price {price} TND</label>
					<input
						type="range"
						name="price"
						min={minPrice}
						max={maxPrice}
						id="price"
						value={price}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				{/* end price */}
				{/* size */}
				<div className="form-group">
					<label htmlFor="size">room size(sqft)</label>
					<div className="size-inputs">
						<input
							type="number"
							name="minSize"
							id="size"
							value={minSize}
							onChange={handleChange}
							className="size-input"
						/>
						<input
							type="number"
							name="maxSize"
							id="size"
							value={maxSize}
							onChange={handleChange}
							className="size-input"
						/>
					</div>
				</div>
				{/* end size */}
				{/* extras */}
				<div className="form-group">
					<div className="single-extra">
						<input
							type="checkbox"
							checked={breakfast}
							onChange={handleChange}
							name="breakfast"
							id="breakfast"
						/>
						<label htmlFor="breakfast">breakfast</label>
					</div>
					<div className="single-extra">
						<input type="checkbox" checked={pets} onChange={handleChange} name="pets" id="pets" />
						<label htmlFor="pets">pets</label>
					</div>
				</div>
				{/* end extras */}
			</form>
		</section>
	);
}
