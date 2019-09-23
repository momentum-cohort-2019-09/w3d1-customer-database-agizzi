const capitalize = (string) => v.titleCase(string);
// test function with string below
console.log(capitalize('i like to poop'));

function customerToHTML(customer) {
	return `<div class="customerBox">
            <img src="${customer.picture.large}" class="largePhoto">
            <h2 class="customerName">${capitalize(customer.name.first)} ${capitalize(customer.name.last)}</h2>
            <ul class="customerInfo">
                <li class ="customerEmail">${customer.email}</li>
                <li class="customerAddressLine1">${capitalize(customer.location.street)}</li>
                <li class="customerAddressLine2">${capitalize(customer.location.city)}, ${nameToAbbr(
		capitalize(customer.location.state)
	)} ${capitalize(customer.location.postcode)}</li>
                <li class="customerDOB"> DOB: ${moment(customer.dob).format('MMMM Do YYYY')}</li>
                <li class="customerSince">Customer Since: ${moment(customer.registered).format('MMMM Do YYYY')}</li>
            </ul>
        </div>`;
}

document.querySelector('.container').innerHTML = customers.map(customerToHTML).join('\n');
