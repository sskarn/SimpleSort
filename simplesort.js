function bubbleSort() {

for (i = 0; i < 5; i++){
    Array[i] = parseInt(prompt());
}

for (i = 0; i < 5; i++){
    for (j = 0; j < 4; j++) {
    if (Array[j] > Array[j+1]){
        temp = Array[j];
        Array[j] = Array[j+1];
        Array[j+1] = temp;
        } 
    }
}

for (i = 0; i < 5; i++){
    console.log(Array[i])
}
}

bubbleSort();
