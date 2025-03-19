--1
/*CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INT UNIQUE,
    FOREIGN KEY (customer_id) REFERENCES Customer(id) ON DELETE CASCADE
);*/

--2
/*INSERT INTO Customer (first_name, last_name) VALUES ('John', 'Doe');
INSERT INTO Customer (first_name, last_name) VALUES ('Jerome', 'Lalu');
INSERT INTO Customer (first_name, last_name) VALUES ('Lea', 'Rive');*/

--3
/*INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES (true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')),
       (false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));*/


--4

/*SELECT c.first_name
FROM Customer c
JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

SELECT c.first_name, COALESCE(cp.isLoggedIn, false) AS isLoggedIn
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

SELECT COUNT(*) AS notLoggedInCount
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn IS NULL OR cp.isLoggedIn = false;



--2
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

INSERT INTO Book (title, author) VALUES ('Alice In Wonderland', 'Lewis Carroll');
INSERT INTO Book (title, author) VALUES ('Harry Potter', 'J.K Rowling');
INSERT INTO Book (title, author) VALUES ('To kill a mockingbird', 'Harper Lee');


CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);



INSERT INTO Student (name, age) VALUES ('John', 12);
INSERT INTO Student (name, age) VALUES ('Lera', 11);
INSERT INTO Student (name, age) VALUES ('Patrick', 10);
INSERT INTO Student (name, age) VALUES ('Bob', 14);


CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);



INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
        (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
       ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), 
        (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
       ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
        (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
       ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), 
        (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');

--Select all columns from the junction table:
SELECT * FROM Library;

--Select the name of the student and the title of the borrowed books
SELECT s.name, b.title
FROM Library l
JOIN Student s ON l.student_fk


--Select the Average Age of Children Who Borrowed "Alice In Wonderland"
SELECT AVG(s.age) AS average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
WHERE l.book_fk_id = (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland');



--Delete a Student from the Student Table

DELETE FROM Student WHERE name = 'John';


*/
	   