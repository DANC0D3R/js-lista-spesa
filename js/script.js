const items = [
    'Pane',
    'Latte',
    'Acqua',
    'Yogurt',
    'Carne',
    'Pesce',
    'Scottex'
];

const itemsList = document.getElementById('items');

let i = 0;

while(i < items.length){
    const li = document.createElement('li');
    li.innerHTML = items[i];
    itemsList.append(li);
    console.log(items[i]);
    i++;
}