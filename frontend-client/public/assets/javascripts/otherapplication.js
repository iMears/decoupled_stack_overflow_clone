$(document).ready(function(){
  // bindEvents();
  // $('.markdown').keyup(function() {
  //   var liveText = $('.markdown').val();
  //   $('.live-markdown').html(parseContent(liveText));
  // })
  console.log("heyyy")
});

var question = {
    "id": 1,
    "title": "somesnakes",
    "content": "something",
    "votes": 111,
    "created_at": "2015-02-07T00:05:44.281Z",
    "updated_at": "2015-02-07T00:20:34.238Z"
}


// function bindEvents() {
//   $('#new-question-form').on("submit", insertQuestion);
//   $('#new-answer-form').on("submit", insertAnswer);
//   $('.question-list').on("click", ".upvote", incrementVote);
//   $('.question-list').on("click", ".downvote", decrementVote);
// }

// //--------------------------Increment Vote--------------------------

// function incrementVote(event) {
//   event.preventDefault();
//   var listItem = event.target;
//   var id = $(listItem).attr("id");
//   var form_input = $(this).serialize();
//   $.ajax( {
//     url: this.parentElement.action,
//     type: 'POST',
//     success: function(response) {
//       $("p[id="+response.id+"]").text("votes: " + response.votes);
//     },
//     error: function(response) {
//       console.log(response);
//     }
//   });
// }

// //--------------------------Decrement Vote--------------------------

// function decrementVote(event) {
//   event.preventDefault();
//   var listItem = event.target;
//   var id = $(listItem).attr("id");
//   var form_input = $(this).serialize();
//   $.aj  ax( {
//     url: this.parentElement.action,  //Should replace parentElement with closest in order to prevent inserted DOM elements from changing reference
//     type: 'POST',
//     success: function(response) {
//       $("p[id="+response.id+"]").text("votes: " + response.votes);
//     },
//     error: function(response) {
//       console.log(response);
//     }
//   });
// }

// //--------------------------Insert Question--------------------------

// function insertQuestion(event) {
//   event.preventDefault();
//   var url = this.action;
//   var form_input = $(this).serialize();
//   $.ajax( {
//     url: url,
//     type: 'POST',
//     data: form_input,
//     success: function(response) {
//       $(".question-list").append(
//           buildQuestion(response)
//         );
//     },
//     error: function(response) {
//       console.log(response);
//     }
//   });
// }

// function buildQuestion(question_obj) {
//   var template = $(".append-question").html();
//   var newQuestTemplate = Handlebars.compile(template);
//   var resultHTML = newQuestTemplate({"question_id": question_obj.id, "title": question_obj.title, "content": question_obj.content, "votes": question_obj.votes});
//   return $(resultHTML);
// }

// //---------------------------Insert Answer-------------------------

// function insertAnswer(event) {
//   event.preventDefault();
//   var url = this.action;
//   var form_input = $(this).serialize();
//   $.ajax( {
//     url: url,
//     type: 'POST',
//     data: form_input,
//     success: function(response) {
//       $(".answer-list").append(
//           buildAnswer(response)
//         );
//     },
//     error: function(response) {
//       console.log(response);
//     }
//   });
// }

// function buildAnswer(answer_obj) {
//   var template = $(".append-answer").html();
//   var newAnswerTemplate = Handlebars.compile(template);
//   var resultHTML = newAnswerTemplate({"question_id": answer_obj.question_id, "answer_id": answer_obj.id, "title": answer_obj.title, "content": answer_obj.content});
//   return $(resultHTML);
// }

// //---------------------------Parse Content-------------------------
// function parseContent(markdown) {
//   // replace **stuff** with <strong>stuff</strong>
//   // replace *stuff* with <em>stuff</em>
//   markdown = markdown.replace(/\*\*([^*]+)\*\*/, "<strong>$1</strong>");
//   return markdown;
// }

