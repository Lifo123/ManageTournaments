export default function Lifo() {
    console.log('Lifo Functions Active');
}

export function SearchSort(array, input) {
    return array
        .filter(item => {
            const firstValue = Object.values(item)[0];
            return firstValue && firstValue.toLowerCase().includes(input.toLowerCase());
        })
        .sort((a, b) => {
            const firstValueA = Object.values(a)[0].toLowerCase();
            const firstValueB = Object.values(b)[0].toLowerCase();

            // Si a comienza con el término de búsqueda y b no, a debería ir primero
            if (firstValueA.startsWith(input.toLowerCase()) && !firstValueB.startsWith(input.toLowerCase())) {
                return -1;
            }

            // Si b comienza con el término de búsqueda y a no, b debería ir primero
            if (!firstValueA.startsWith(input.toLowerCase()) && firstValueB.startsWith(input.toLowerCase())) {
                return 1;
            }

            // Si ninguno de los anteriores se cumple, ordenar alfabéticamente por el primer valor
            return firstValueA.localeCompare(firstValueB);
        });
}
