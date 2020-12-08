// For custom date purpose
new Pikaday({ field: document.getElementById('arrival_date') });
new Pikaday({ field: document.getElementById('departure_date') });

// Form validation system
function validateForm() {
  if (isEmpty(document.getElementById('first_name').value.trim())) {
    alert('First name is required!');
    return false;
  }
  if (isEmpty(document.getElementById('last_name').value.trim())) {
    alert('Last name is required!');
    return false;
  }
  if (isEmpty(document.getElementById('phone').value.trim())) {
    alert('Phone is required!');
    return false;
  }
  if (isEmpty(document.getElementById('email').value.trim())) {
    alert('Email is required!');
    return false;
  }
  if (!validateEmail(document.getElementById('email').value.trim())) {
    alert('Email must be a valid email address!');
    return false;
  }
  if (isEmpty(document.getElementById('arrival_date').value.trim())) {
    alert('Arrival date is required!');
    return false;
  }
  if (isEmpty(document.getElementById('departure_date').value.trim())) {
    alert('Departure date is required!');
    return false;
  }
  if (isEmpty(document.getElementById('person').value.trim())) {
    alert('Number of adults is required!');
    return false;
  }
  return true;
}

function isEmpty(str) { return (str.length === 0 || !str.trim()); }

function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
  return isEmpty(email) || re.test(email);
}