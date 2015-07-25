Template.pollForm.events({
	// Form submissions.
	'submit form': function(event)	{
		// Stop submition of form.
		event.preventDefault();
		// Get data from the form.
		var newPoll = {
			question: event.target.question.value,
			choices: [
				{ text: event.target.choice1.value, votes: 0 },
				{ text: event.target.choice2.value, votes: 0 },
				{ text: event.target.choice3.value, votes: 0 }	
			]
		};
		// Create new poll.
		Polls.insert(newPoll);
	}
});