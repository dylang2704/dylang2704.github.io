//Dylan Gray 18458986
//inputs - Subjects + Grades
//process - loop for grades which is = to subjects
//outputs - average grades
// Question 1 Week 10
function grades() {
            var numSubjects = parseInt(document.getElementById("numSubjects").value);
            var grades = [];
            var gradeList = ""; // String for returning each grade with their respective letter
            var userGrade;

            for (var i = 1; i <= numSubjects; i++) {
                var userMarks = parseInt(prompt("Enter marks for subject " + i + ":"));
                grades.push(userMarks); // Add values to the grades array
            }
            // Determine grade for each subject to print them back to the user
			// Took letter grade idea from week 9 question + added here
            for (var i = 0; i < numSubjects; i++) {
                if (grades[i] >= 90) {
                    userGrade = 'A';
                } else if (grades[i] >= 80) {
                    userGrade = 'B';
                } else if (grades[i] >= 70) {
                    userGrade = 'C';
                } else if (grades[i] >= 60) {
                    userGrade = 'D';
                } else if (grades[i] >= 50) {
                    userGrade = 'E';
                } else {
                    userGrade = 'F';
                }
                gradeList += "Subject " + (i + 1) + " - Grade: " + grades[i] + ", Letter Grade: " + userGrade + "<br>";
            }

            // Display the results
            var resultsContent = document.getElementById("resultsContent");
            resultsContent.innerHTML =  gradeList;

            // Show the results card
            var resultsCard = document.getElementById("results");
            resultsCard.style.display = "block";
        }
