const cakes = 3;

const divideCakes = (numberOfGuests = guests) => {
    let divisionResult = 0;
    if (numberOfGuests < 1 || numberOfGuests > 12) {
        return 'NO';
    }
    if (numberOfGuests <= cakes) {
        divisionResult = cakes % numberOfGuests;
        return divisionResult <= 1 ? 'YES' : 'NO';
    }
    else if (numberOfGuests > cakes) {
        divisionResult = 0;
        if ([4, 7, 9, 10].includes(numberOfGuests) || numberOfGuests % cakes > 1 ) return 'NO';
        return 'YES';
    }
}

