const person = {
	name: 'Paul',
	age: 22,
	location: {
		city: 'London',
		temp: 11
	}
}

// const {name, age} = person
const {city} = person.location

// console.log(`${name} is ${age} and lives in ${city}`);

const book = {
	title: 'How To Stop Time',
	author: 'Matt Haig',
	publisher: {
		name: 'Penguin'
	}
}

const {title, author} = book;

const {name = 'Self published'} = book.publisher;

// console.log(`This month I read ${title} by ${author}`);
// console.log(`${title} was published by ${name}`)


const names = ['Paul', 'Hugo', 'Modigliani'];

const [paul, ,modigliani] = names

console.log(`${paul}, ${modigliani}`)
