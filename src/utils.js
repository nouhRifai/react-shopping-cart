export default function formatCurrency(num){
    return "MAD" + Number(num.toFixed(2)).toLocaleString()+" ";
}