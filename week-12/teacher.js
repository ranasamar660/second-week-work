
        let teachers = [];
        let students = [];

        class Person {
            constructor(name, dob, gender) {
                this.name = name;
                this.dob = dob;
                this.gender = gender;
            }
            age() {
                let today = new Date();
                let dateOfBirth = new Date(this.dob);
                return today.getFullYear() - dateOfBirth.getFullYear();
            }
            dob = this.age();
        }
        // teacher
        class Teacher extends Person {
            constructor(name, father_name, dob, gender, salary, salary_status, subject, qualify, joining_date) {
                super(name, dob, gender);
                this.father_name = father_name;
                this.salary = salary;
                this.salary_status = salary_status;
                this.qualify = qualify;
                this.subject = subject;
                this.joining_date = joining_date;
            }
        }

        // student
        class Student extends Person {
            constructor(name, father_name, dob, gender, student_class, fee, joining_date) {
                super(name, dob, gender);
                this.father_name = father_name;
                this.student_class = student_class;
                this.fee = fee;
                this.joining_date = joining_date;
            }
        }
        let addInputformTeacher = document.getElementById("addInputformTeacher");
        let addInputformStudent = document.getElementById("addInputformStudent");

        addInputformTeacher.addEventListener("click", () => {
            document.querySelector(".teacherForm").style.display = "block";
            document.querySelector(".studentForm").style.display = "none";
            document.getElementById("addInputformTeacher").style.display = "none";
            document.getElementById("addInputformStudent").style.display = "block";
        });

        addInputformStudent.addEventListener("click", () => {
            document.querySelector(".studentForm").style.display = "block";
            document.querySelector(".teacherForm").style.display = "none";
            document.getElementById("addInputformTeacher").style.display = "block";
            document.getElementById("addInputformStudent").style.display = "none";
        });

        // Event Listener Teacher
        const addTeacherButton = document.getElementById("addTeacher");
        addTeacherButton.addEventListener("click", () => {

            let teacherName = document.getElementById("teacherName").value;
            let teacherFatherName = document.getElementById("teacherFatherName").value;
            let teacherDob = document.getElementById("teacherDob").value;
            let teacherGender = document.getElementById("teacherGender").value;
            let teacherSalary = document.getElementById("teacherSalary").value;
            let teacherSalaryStatus = document.getElementById("teacherSalaryStatus").value;
            let teacherQualify = document.getElementById("teacherQualify").value;
            let teacherSubject = document.getElementById("teacherSubject").value;

            if (!teacherName || !teacherDob || !teacherGender || !teacherSalary || !teacherSalaryStatus || !teacherQualify || !teacherSubject) {
                alert("Please fill in all teacher fields.");
                return;
            }
            const newTeacher = new Teacher(
                teacherName,
                teacherFatherName,
                teacherDob,
                teacherGender,
                teacherSalary,
                teacherSalaryStatus,
                teacherSubject,
                teacherQualify,
                "02/03/1980"
            );
            teachers.push(newTeacher);

            displayTeachers();

            document.querySelector(".teacherForm").style.display = "none";
        });

        // Event Listener Student
        const addStudentButton = document.getElementById("addStudent");
        addStudentButton.addEventListener("click", () => {

            let studentName = document.getElementById("studentName").value;
            let studentFatherName = document.getElementById("studentFatherName").value;
            let studentDob = document.getElementById("studentDob").value;
            let studentGender = document.getElementById("studentGender").value;
            let studentClass = document.getElementById("studentClass").value;
            let studentFee = document.getElementById("studentFee").value;

            if (!studentName || !studentDob || !studentGender || !studentClass || !studentFee) {
                alert("Please fill in all student fields.");
                return;
            }
            const newStudent = new Student(
                studentName,
                studentFatherName,
                studentDob,
                studentGender,
                studentClass,
                studentFee,
                "02/03/1980"
            );

            students.push(newStudent);
            displayStudents();
            
            document.querySelector(".studentForm").style.display = "none";
        });

        // Function Teachers
        function displayTeachers() {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "<h2>Teachers Information</h2>";

            if (teachers.length === 0) {
                resultDiv.innerHTML += "<p>No teachers added yet.</p>";
                return;
            }

            let table = `
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Salary</th>
                            <th>Salary Status</th>
                            <th>Qualification</th>
                            <th>Subject</th>
                            <th>Joining Date</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            teachers.forEach((teacher) => {
                table += `
                    <tr>
                        <td>${teacher.name}</td>
                        <td>${teacher.father_name}</td>
                        <td>${teacher.age()}</td>
                        <td>${teacher.gender}</td>
                        <td>${teacher.salary}</td>
                        <td>${teacher.salary_status}</td>
                        <td>${teacher.qualify}</td>
                        <td>${teacher.subject}</td>
                        <td>${teacher.joining_date}</td>
                    </tr>
                `;
            });

            table += `
                    </tbody>
                </table>
            `;

            resultDiv.innerHTML += table;
        }

        // Function Students
        function displayStudents() {
            let resultDiv = document.getElementById("result");
            let studentsSection = document.getElementById("studentsSection");
            if (!studentsSection) {
                studentsSection = document.createElement("div");
                studentsSection.id = "studentsSection";
                studentsSection.innerHTML = "<h2>Students Information</h2>";
                resultDiv.appendChild(studentsSection);
            } else {
                studentsSection.innerHTML = "<h2>Students Information</h2>";
            }

            if (students.length === 0) {
                studentsSection.innerHTML += "<p>No students added yet.</p>";
                return;
            }

            let table = `
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Class</th>
                            <th>Fee</th>
                            <th>Joining Date</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            students.forEach((student) => {
                table += `
                    <tr>
                        <td>${student.name}</td>
                        <td>${student.father_name}</td>
                        <td>${student.age()}</td>
                        <td>${student.gender}</td>
                        <td>${student.student_class}</td>
                        <td>${student.fee}</td>
                        <td>${student.joining_date}</td>
                    </tr>
                `;
            });

            table += `
                    </tbody>
                </table>
            `;

            studentsSection.innerHTML += table;
        }
