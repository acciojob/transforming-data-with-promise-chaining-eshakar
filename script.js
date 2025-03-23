//your JS code here. If required.
function setEventListener() {
	const inputElement = document.getElementById('ip');
	const buttonElement = document.getElementById('btn');
	const outputDiv = document.getElementById('output');

	buttonElement.addEventListener('click', function() {
		processWithPromises(inputElement.value);
	});
}

function processWithPromises(inputValue) {
	const number = parseFloat(inputValue);

	if (isNaN(number)){
		console.error('Please enter a valid number');
		return;
	}

	const outputDiv = document.getElementById('output');
	outputDiv.textContent = '';

	return new Promise(resolve => {
		setTimeout(() => {
			outputDiv.textContent = `Result: ${number}`;
			resolve(number);
		}, 2000);
	})

	.then(num => {
		return new Promise(resolve => {
			const multipliedNumber = num * 2;
			setTimeout(() => {
				outputDiv.textContent = `Result: ${multipliedNumber}`;
		        resolve(multipliedNumber);
			}, 2000);
		});
	})
	.then(num => {
    return new Promise(resolve => {
      const subtractedNumber = num - 3;
      setTimeout(() => {
        outputDiv.textContent = `Result: ${subtractedNumber}`;
        resolve(subtractedNumber);
      }, 1000);
    });
  })
	.then(num => {
    return new Promise(resolve => {
      const dividedNumber = num / 2;
      setTimeout(() => {
        outputDiv.textContent = `Result: ${dividedNumber}`;
        resolve(dividedNumber);
      }, 1000);
    });
  })
	.then(num => {
    return new Promise(resolve => {
      const finalNumber = num + 10;
      setTimeout(() => {
        outputDiv.textContent = `Final Result: ${finalNumber}`;
        resolve(finalNumber);
      }, 1000);
    });
  })
	 .catch(error => {
    console.error('Error in promise chain:', error);
    outputDiv.textContent = `Error: ${error.message}`;
  });
}

document.addEventListener('DOMContentLoaded', setEventListener);