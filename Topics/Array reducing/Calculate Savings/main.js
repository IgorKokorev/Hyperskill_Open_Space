const salary = 25000;

function getSalary(expenses) {
    let remainingSalary = expenses.reduce((remaining, expense) => remaining - expense, salary);
    console.log(remainingSalary);
}