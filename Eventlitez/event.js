document.getElementById('create-event-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const description = document.getElementById('event-description').value;

    const eventList = document.getElementById('events');
    const eventItem = document.createElement('li');
    eventItem.className = 'event-item';

    eventItem.innerHTML = `
        <h3 class="event-title">${title}</h3>
        <p class="event-date">Date: ${date}</p>
        <p class="event-description">${description}</p>
    `;

    eventList.appendChild(eventItem);
   document.getElementById('create-event-form').reset();
});
