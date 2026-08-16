document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.clients-table tbody tr');
    
    rows.forEach(row => {
        row.addEventListener('click', () => {
            // Remove active class from all rows
            rows.forEach(r => r.classList.remove('active-row'));
            
            // Add active class to clicked row
            row.classList.add('active-row');
            
            // In a real application, clicking a row would fetch the client details
            // and update the right-hand panel accordingly.
            const clientId = row.querySelector('.client-id').textContent;
            const clientName = row.querySelector('.client-name').textContent;
            
            console.log(`Selected client: ${clientId} - ${clientName}`);
            // Note: For this prototype, we just log the selection.
        });
    });
});
