function createCalendar(year, month) {
    // Create a new table for the calendar
    const table = document.createElement('table');
    
    // Create a header row with weekday names
    const headerRow = document.createElement('tr');
    const weekdays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    weekdays.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create a date object for the first day of the month
    const date = new Date(year, month - 1, 1);
    
    // Calculate the first day of the month and the number of days in the month
    const startDay = (date.getDay() + 6) % 7; // Convert Sunday (0) to Saturday (6)
    const daysInMonth = new Date(year, month, 0).getDate(); // Get the total number of days in the month

    // Create rows for the calendar
    let row = document.createElement('tr');
    
    // Fill empty cells for days before the first of the month
    for (let i = 0; i < startDay; i++) {
        const td = document.createElement('td');
        td.textContent = '.'; // Empty placeholder
        row.appendChild(td);
    }

    // Fill in the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const td = document.createElement('td');
        td.textContent = day;
        row.appendChild(td);
        
        // If the end of the week is reached, append the row to the table and create a new row
        if ((startDay + day) % 7 === 0) {
            table.appendChild(row);
            row = document.createElement('tr'); // Create a new row for the next week
        }
    }

    // Append the last row if it has any cells
    if (row.childElementCount > 0) {
        table.appendChild(row);
    }

    // Append the table to the body of the document
    document.body.appendChild(table);
}

// Example usage
createCalendar(2012, 9);