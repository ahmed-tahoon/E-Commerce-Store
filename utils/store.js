



exports.formatOrders = orders=>{
   const newOrders = orders.map((order)=>{
        return {
            _id : order._id,
            total: parseFloat(Number(order.total.toFixed(2))),
            created: order.created,
            products: order?.cart?.products
        }
   })


}