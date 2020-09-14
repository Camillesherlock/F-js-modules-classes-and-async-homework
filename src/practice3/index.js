// export const getPoetry = () => {
//     const url = `https://v1.jinrishici.com/all.json`
//     returnfetch(url,{
//         method:'get'
//     }).then(response =>{
//         if(response.ok){
//             return Promise.resolve(response.json())
//         }else{
//             return Promise.reject("error")
//         }
//         return
//     }).then(data=>{
//         return [data.origin,data.author,data.content]
//     })
//     .catch(e=>{
//         console.log(e);
//     })
// }

// eslint-disable-next-line import/prefer-default-export
export const getPoetry = async () => {
  // eslint-disable-next-line prettier/prettier
try{ const url = `https://v1.jinrishici.com/all.json`
    // eslint-disable-next-line prettier/prettier
     const response = await fetch(url,{method:"get"});
    const receiptData = await response.json();
    // eslint-disable-next-line no-unused-vars
    const data = [receiptData.origin, receiptData.author, receiptData.content];
    return data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};
