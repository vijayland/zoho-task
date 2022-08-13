function ascending(data, filed){
   return Object.keys(data).sort((a, b) => {
        return data[a]?.total[filed] - data[b]?.total[filed]
    }).reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
    }, {});
}
function dscending(data, filed){
    return Object.keys(data).sort((a, b) => {
         return data[b]?.total[filed] - data[a]?.total[filed]
     }).reduce((obj, key) => {
         obj[key] = data[key];
         return obj;
     }, {});
 }
export {
    ascending,
    dscending
}