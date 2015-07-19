// When application is started.
Meteor.startup(function() {
  // If no polls available, create sample data.
  if (Polls.find().count() === 0) {
    // Create sample polls.
    var samplePolls = [
      {
        question: 'How is you day going?',
        choices: [
          { text: 'Good.', votes: 0 },
          { text: 'Bad.',  votes: 0 },
          { text: 'Meh.',  votes: 0 }
        ]
      },
      {
        question: 'How does this web app look?',
        choices: [
          { text: 'Great!',      votes: 0 },
          { text: 'Ok.',         votes: 0 },
          { text: 'Needs work.', votes: 0 }
        ]
      }
    ];
    // Loop over each sample poll and insert into the database.
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });
  }
});