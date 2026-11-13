const DishCard = (props) => {
  const dish = props.dish;
  const qty = props.qty;

  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <div className="dish-info">
        <h3>{dish.name}</h3>
        <span className="dish-price">${dish.price.toFixed(2)}</span>
        <p>{dish.description}</p>

        {qty === 0 ? (
          <button className="btn" onClick={() => props.onAdd(dish)}>
            + Add to order
          </button>
        ) : (
          <div className="order-row">
            <div className="qty">
              <button onClick={() => props.onRemove(dish)}>-</button>
              <span>{qty}</span>
              <button onClick={() => props.onAdd(dish)}>+</button>
            </div>
            <strong className="line-total">${(qty * dish.price).toFixed(2)}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default DishCard;