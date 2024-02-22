'use client'

import { useDispatch } from "react-redux";
import OrderSuccess from "../components/OrderSuccess";
import { clearCart } from "../redux/cartSlice";
import { useEffect } from "react";


export default function page(){
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
  <OrderSuccess />
  )
  }
