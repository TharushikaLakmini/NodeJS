function checkNumber(num) {
    return new Promise((resolve, reject) => {

        if (num > 10) {
            resolve("Number is greater than 10 ");
        } else {
            reject("Number is 10 or less ");
        }

    });
}

async function runExample() {
    try {
        const result = await checkNumber(15);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

runExample();

console.log("Edited by Sanduni for collaboration Test");
