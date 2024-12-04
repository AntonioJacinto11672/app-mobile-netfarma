export const formatDate1 = (date: Date): string => {


    const day = String(date.getDate()).padStart(2, '0'); // Garantir 2 dígitos


    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};