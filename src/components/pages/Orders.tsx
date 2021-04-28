import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography
} from "@material-ui/core";
import orderData from "../../mocks/orders";

const Orders = () => {
  const ordersTable = orderData.map((order, orderIndex) => {
    const orderProducts = order.items.map((item, orderProductIndex) => {
      return <p key={orderProductIndex}>-{item.name}</p>;
    });
    const orderItem = (
      <TableRow key={orderIndex} className="order">
        <TableCell className="cell">{order.id}</TableCell>
        <TableCell className="cell">{orderProducts}</TableCell>
        <TableCell className="cell">{order.price}</TableCell>
        <TableCell className="cell">{order.status}</TableCell>
      </TableRow>
    );
    return orderItem;
  });
  return (
    <div className="orderList">
      <Typography variant="h6" className="header">
        Orders
      </Typography>
      <Table className="orderTable">
        <TableBody>{ordersTable}</TableBody>
      </Table>
    </div>
  );
};

export default Orders;
