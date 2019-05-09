
let monthlyExpense = {
    name:'Groceries',
    amount: 341.58
}
let monthlyExpenses = [monthlyExpense]
let addBtn = document.getElementById("addBtn")
var itemCopy = document.getElementById('field')
let balance = document.getElementById('balance')

addDefaultExpenses();
balance.innerText = updateBal(monthlyExpenses)

function addDefaultExpenses(){
    let name = document.querySelector('.itemName')
    let amount = document.querySelector('.itemAmount')
    let remBtn = document.getElementById('remBtn')

    name.innerText = monthlyExpense['name']
    amount.innerText = monthlyExpense['amount']

    remBtn.addEventListener('click', function(e){
        let tgt = e.target
        tgtName = tgt.parentNode.parentNode.querySelector('p.itemName')
        console.log(tgtName)
        updateBal(monthlyExpenses, tgtName)

        tgt.parentNode.parentNode.remove()
    })

}

addBtn.addEventListener('click', function(){

    let amount = document.getElementById('newAmount').value
    let name = document.getElementById('newName').value
    var newExpense = itemCopy.cloneNode(true)
    document.querySelector('.expenseList').appendChild(newExpense)
    var newItem = document.querySelector('.expenseList').lastChild
    let nameP = newItem.querySelector('p.itemName')
    let amtP = newItem.querySelector('p.itemAmount')

    monthlyExpenses.push({
        name,
        amount
    })

    nameP.innerText = name
    amtP.innerText = amount

    var newBtn = newItem.querySelector('button')
    newBtn.addEventListener('click', function(e){
        let tgt = e.target
        tgt.parentNode.parentNode.remove()
        balance.innerText = updateBal(monthlyExpenses)
    })

    balance.innerText = updateBal(monthlyExpenses)


})

function updateBal(expenseList, deletedExpenseName){
    console.log(monthlyExpenses)

    let total = 0;

    if(deletedExpenseName){
        monthlyExpenses = monthlyExpenses.filter(function(expense){
            if(tgtName == expense[name]){
                return false
            }
            else{
                return true
            }
        })
    }
    

    //for each exptense item in expense list find the amount property and add it to the total
    expenseList.forEach(function(expense){
        total += parseInt(expense.amount)
    })

    return total
}