// Attach events to poll template.
Template.poll.events({
  // Handle clicking a choice.
  'click .vote': function(event) {
    // Prevent default behavior.
    event.preventDefault();
    // Get the parent id.
    var pollID = $(event.currentTarget).parent('.poll').data('id');
    var voteID = $(event.currentTarget).data('id');
    // Create the incrementing object so we can add to the corresponding vote.
    var voteString = 'choices.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;
    // Increment the number of votes for this choice.
    Polls.update(
      { _id: pollID }, 
      { $inc: action }
    );
  }
});