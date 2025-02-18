const isPastDate = (date) =>{
    const today = new Date();
    if(date < today)
      return false;
    
    return true;
};

export default isPastDate;