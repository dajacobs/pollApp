Template.body.helpers({
	polls: function() {
		return Polls.find();
	}
});
Ui.registerHelper('indexedArray', function(context, options) {
	if (context) {
		return context.map(function(item, index) {
			item._index = index;
			return item;
		});
	}
});