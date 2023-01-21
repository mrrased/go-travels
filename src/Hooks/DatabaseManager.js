// use local storage as your db for now
const addToDb = (id , quantity, value, ) => {
    const exists = getDb();
    let shopping_cart = {};
    if (!exists) {
      shopping_cart[id] = 1;
    }
    
    else {
      shopping_cart = JSON.parse(exists);
      if (shopping_cart[id]) {
        if(quantity){
          // const newCount = shopping_cart[id] + value;
          shopping_cart[id] = value;
        }
        else{
          const newCount = shopping_cart[id] + value;
            shopping_cart[id] = newCount;
        }
      }
      
      else {
        shopping_cart[id] = 1;
      }
    }
    updateDb(shopping_cart);
  }

  const AddToTokenDb = ( id ) =>{
    const exist = getTokentDb();
    
    let token = {};
    if(!exist){
      token[id] = 1;
      
    }
    else{
        token = JSON.parse(exist);
        if(token === id){
          
          return;
        }
        else{
          token[id] = 1;
        }
    }
    updateTokenDb(token);
  }

  const getTokentDb = () => localStorage.getItem('t_id');
  const updateTokenDb = (token) =>{
    
    localStorage.setItem('t_id', JSON.stringify(token));
  };
  const getDb = () => localStorage.getItem('shopping_cart');
  const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
  }
  
  const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {
  
    }
    else {
      const shopping_cart = JSON.parse(exists);
      delete shopping_cart[id];
      updateDb(shopping_cart);
    }
  }
  
  const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheCart = () => {

    localStorage.removeItem('shopping_cart');
  }

  const clearTheTokenCart = () =>{
    
    localStorage.removeItem('t_id');
  }
  
  export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart , AddToTokenDb , clearTheTokenCart}