function ascending(data, filed){
   return Object.keys(data).sort((a, b) => {
        return (data[a]?.total[filed] || Number.MAX_VALUE) - (data[b]?.total[filed] || Number.MAX_VALUE)
    }).reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
    }, {});
}
function dscending(data, filed){
    return Object.keys(data).sort((a, b) => {
         return (data[b]?.total[filed] || Number.MAX_VALUE) - (data[a]?.total[filed] || Number.MAX_VALUE)
     }).reduce((obj, key) => {
         obj[key] = data[key];
         return obj;
     }, {});
 }
export {
    ascending,
    dscending
}