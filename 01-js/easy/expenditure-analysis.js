/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let list = []
    
    for (let i = 0; i<transactions.length; i++){
        let obj = {}
        let isPresent = false;
        if (list.length == 0){
            obj["category"] = transactions[i]["category"]
            obj["totalSpent"] = 0
            list.push(obj)
        }
        
        for (let j = 0; j< list.length; j++){
            if (list[j]["category"] == transactions[i]["category"]){
                isPresent = true;
                list[j]["totalSpent"] += transactions[i]["price"];
                break;
            }
        }
    if(isPresent == false){
        obj["category"] = transactions[i]["category"]
        obj["totalSpent"] = transactions[i]["price"]
        list.push(obj)
    }
}
    return list
}

module.exports = calculateTotalSpentByCategory;
