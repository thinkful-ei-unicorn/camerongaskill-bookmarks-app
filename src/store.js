/* eslint-disable indent */
const store = {
	bookmarks: [],
	adding: false,
	error: null,
	filter: 0,
};

// add bookmark to list

const addBookmark = function (bookmark) {
	this.store.bookmarks.push(bookmark);
};

// return bookmark with matching id

const findById = function (id) {
	let foundBookmark = this.store.bookmarks.find(
		(currentBM) => currentBM.id === id
	);
	return foundBookmark;
};

// delete bookmark with matching id

const findAndDelete = function (id) {
	this.store.bookmarks = this.store.bookmarks.filter(
		(currentBM) => currentBM.id !== id
	);
};

//Filter bookmarks by rating
const filterByRatings = function () {
	let filteredList = this.store.bookmarks.filter(
		(currentBookmark) => currentBookmark.rating >= this.store.filter
	);
	return filteredList;
};

//sets store filter
const setFilter = function (rating) {
	this.store.filter = rating;
};
export default {
	store,
	addBookmark,
	findById,
	findAndDelete,
	filterByRatings,
	setFilter,
};
